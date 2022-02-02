import React from "react";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import Minicart from '../Minicart/Minicart';

export default class HeaderWidgets extends React.Component {

    state = {
        currencyListVisible: false,
        minicartVisible: false,
    }

    toggleCurrencyList = () => {
        if (this.state.minicartVisible) {
            this.setState({ minicartVisible: false })
        }
        this.setState((state) => ({
            currencyListVisible: !state.currencyListVisible
        }))
    }

    toggleMinicart = () => {
        if (this.state.currencyListVisible) {
            this.setState((state) => ({
                currencyListVisible: !state.currencyListVisible
            }))
        }
        this.setState((state) => ({
            minicartVisible: !state.minicartVisible
        }))
    }

    render() {
        return (
            <ul className='header__widgets'>
                <li>
                    <CurrencySelector
                        currencyListVisible={this.state.currencyListVisible}
                        toggleCurrencyList={this.toggleCurrencyList}
                    />
                </li>
                <li >
                    <Minicart 
                        toggleMinicart={this.toggleMinicart}
                        minicartVisible={this.state.minicartVisible}
                    />
                </li>
            </ul>
        )
    }
}