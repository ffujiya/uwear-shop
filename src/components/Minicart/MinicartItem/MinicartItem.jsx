import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { PRODUCT_DETAILS } from "../../../queries/queries"
import { increaseProductInCartAmount, decreaseProductInCartAmount } from '../../../redux/actions'
import { graphql } from '@apollo/client/react/hoc';
import "./MinicartItem.scss"

class MinicartItem extends React.Component {

    showAttributes(attributes, selectedAttributes) {
        return attributes.map(item => {
            return (
                <div key={item.id} className="minicart-attr__row">
                    <ul className="minicart-attr__list">
                        {item.items.map(attrItem => {
                            const swatch = (item.type === 'swatch' ? ' swatch' : '');
                            const displayValue = (item.type === 'swatch' ? '' : attrItem.displayValue);
                            const divStyle = (item.type === 'swatch' ? { backgroundColor: attrItem.value } : {});
                            const active = (selectedAttributes[item.name] === attrItem.displayValue) ? 'active' : '';
                            return (
                                <li key={attrItem.id}>
                                    <div className={'minicart-attr__btn ' + active + swatch} style={divStyle}>{displayValue}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>)
        })
    }

    showPrice = (priceList, activeCurrency) => {
        let price = priceList.filter(item => item.currency.label === activeCurrency);
        return `${price[0].currency.symbol} ${price[0].amount}`
    }

    increaseProductInCartAmount(e, productId, selectedAttributes){
        e.stopPropagation();
        this.props.increaseProductInCartAmount(productId, selectedAttributes)
    }

    decreaseProductInCartAmount(e, productId, selectedAttributes){
        e.stopPropagation();
        this.props.decreaseProductInCartAmount(productId, selectedAttributes)
    }

    render() {

        const {
            data,
            currency,
            productId,
            productInCart,
            amount, 
        } = this.props;

        const {selectedAttributes} = productInCart;

        if (data.loading) return <p>Loading...</p>
        if (data.loading) return <p>Error...</p>

        const { brand, name, gallery, attributes, prices } = data.product;

        return (
            <li className="minicart-products__item minicart-product">
                <div className="minicart-product__details">
                    <div className="mproduct">
                        <div className="mproduct__name">{brand}</div>
                        <div className="mproduct__name">{name}</div>
                        <div className="mproduct__price">{this.showPrice(prices, currency)}
                        </div>
                        <div className="mproduct__sizes">
                            <ul className="minicart-sizes">
                                {this.showAttributes(attributes, selectedAttributes)}
                            </ul>
                        </div>
                    </div>
                    <div className="m-amount">
                        <div onClick={(e) => this.increaseProductInCartAmount(e, productId, selectedAttributes)} className="m-amount__more"></div>
                        <div className="m-amount__num">{amount}</div>
                        <div onClick={(e) => this.decreaseProductInCartAmount(e, productId, selectedAttributes)} className="m-amount__less"></div>
                    </div>
                </div>
                <div className="minicart-product__image">
                    <img src={gallery[0]} alt="product" />
                </div>
            </li>
        )
    }
}

export default compose(
    connect(null, { increaseProductInCartAmount, decreaseProductInCartAmount }),
    graphql(PRODUCT_DETAILS, {
        options: props => ({
            variables: {
                productId: props.productId
            },
            fetchPolicy: 'no-cache'
        }),
    }))(MinicartItem);
