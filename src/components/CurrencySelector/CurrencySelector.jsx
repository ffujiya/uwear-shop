import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { graphql } from '@apollo/client/react/hoc';
import { GET_CURRENCIES } from '../../queries/queries';
import { setActiveCurrency } from '../../redux/actions';
import "./CurrencySelector.scss"

class CurrencySelector extends React.Component {

    curRef = React.createRef();

    currencyListItems = (currencies) => {
        return currencies.map((itm, index) =>
            <li
                key={`${itm}_${index}`}
                className="currency-list__item"
                onClick={() => this.setActiveCurrency(itm.label)}>
                {`${itm.symbol} ${itm.label}`}
            </li>
        )
    }

    setActiveCurrency = (currencyLabel) => {
        this.props.setActiveCurrency(currencyLabel)
    }

    handleOutsideClick = (e) => {
        if (this.props.currencyListVisible && !e.path.includes(this.curRef.current)) {
            this.props.toggleCurrencyList();
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleOutsideClick)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleOutsideClick)
    }

    render() {

        const { data: { loading, error, currencies },
            activeCurrency,
            currencyListVisible,
            toggleCurrencyList,
        } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        return (
            <div className="currency-selector"
                ref={this.curRef}
                onClick={toggleCurrencyList}>
                <span className="currency-switch">{currencies.filter(itm => itm.label === activeCurrency)[0].symbol}</span>
                {currencyListVisible ? (
                    <ul className="currency-list">
                        {this.currencyListItems(currencies)}
                    </ul>) : null}
                
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        activeCurrency: state.activeCurrency
    }
}

export default compose(
    connect(mapStateToProps, { setActiveCurrency }),
    graphql(GET_CURRENCIES)
)(CurrencySelector);
