import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PRODUCT_DETAILS } from "../../../queries/queries"
import { graphql } from '@apollo/client/react/hoc';
import { increaseProductInCartAmount, decreaseProductInCartAmount } from '../../../redux/actions';
import "./CartItem.scss"


class CartItem extends React.Component {

    showAttributes(attributes, selectedAttributes) {
        return attributes.map(item => {
            return (
                <div key={item.id} className="cart-attr__row">
                    <div className="cart-attr__header">{item.id}</div>
                    <ul className="cart-attr__list">
                        {item.items.map(attrItem => {
                            const active = (selectedAttributes[item.name] === attrItem.displayValue) ? 'active' : '';
                            return (
                                <li key={attrItem.id}>
                                    <button className={'cart-attr__btn ' + active}>{attrItem.displayValue}</button>
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

    render() {

        const { 
            data, 
            amount, 
            activeCurrency, 
            productInCart, 
            productId,
            increaseProductInCartAmount,
            decreaseProductInCartAmount
        } = this.props;

        const {selectedAttributes} = productInCart;

        if (data.loading) return <p>Loading...</p>
        if (data.loading) return <p>Error...</p>

        const { brand, name, gallery, attributes, prices } = data.product;

        return (
            <li className="cart-list__item cart-product" >
                <div className="cart-product__details">
                    <div className="product-info">
                        <div className="product-info__header">{brand}</div>
                        <div className="product-info__subheader">{name}</div>
                        <div className="product-info__price">{this.showPrice(prices, activeCurrency)}</div>
                        <div className="product-info__attr">
                            <ul className="cart-attr">
                                {this.showAttributes(attributes, selectedAttributes)}
                            </ul>
                        </div>
                    </div>
                    <div className="amount">
                        <div onClick={() => increaseProductInCartAmount(productId, selectedAttributes)} className="amount__more"></div>
                        <div className="amount__num">{amount}</div>
                        <div onClick={() => decreaseProductInCartAmount(productId, selectedAttributes)} className="amount__less"></div>
                    </div>
                </div>
                <div className="cart-product__image">
                    <img src={gallery[0]} alt="product" />
                </div>
            </li>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        activeCurrency: state.activeCurrency
    }
}

export default compose(
    connect(mapStateToProps, {increaseProductInCartAmount, decreaseProductInCartAmount}),
    graphql(PRODUCT_DETAILS, {
    options: props => ({
        variables: {
            productId: props.productId
        },
        fetchPolicy: 'no-cache'
    }),
}))(CartItem);