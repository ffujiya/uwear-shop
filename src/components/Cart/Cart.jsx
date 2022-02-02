import React from "react";
import { connect } from 'react-redux';
import CartItem from "./CartItem/CartItem"
import "./Cart.scss"

class Cart extends React.Component {

    render() {
        
        const { productsInCart } = this.props;

        return (
            <div className="cart">
                <div className="container">
                    <h1 className="cart__header">
                        Cart
                    </h1>
                    <ul className="cart__list cart-list">
                        {productsInCart.map((itm) => {
                            return <CartItem
                                key={itm.productId}
                                productId={itm.productId}
                                amount={itm.selectedProductCount}
                                productInCart = {itm}
                            />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        productsInCart: state.productsInCart,
    }
}

export default connect(mapStateToProps)(Cart);