import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import MinicartItem from './MinicartItem/MinicartItem'
import MinicartTotal from './MinicartTotal/MinicartTotal';
import "./Minicart.scss"

class Minicart extends React.Component {

    curRef = React.createRef();

    handleOutsideClick = (e) => {
        if (this.props.minicartVisible && !e.path.includes(this.curRef.current)) {
            this.props.toggleMinicart();
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleOutsideClick)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleOutsideClick)
    }

    countTotal = (productsInCart, activeCurrency) => {
        <MinicartTotal />
    }

    render() {

        const {
            minicartVisible,
            productsInCart,
            itemsInCartNumber,
            toggleMinicart,
            activeCurrency,
        } = this.props;

        return (
            <div className="cart-widget" onClick={toggleMinicart} ref={this.curRef}>
                <div className="cart-widget__items-count">{itemsInCartNumber}</div>

                {minicartVisible ? document.body.classList.add("lock") : document.body.classList.remove("lock")}
                {minicartVisible ? <div className="minicart-overlay"></div> : null}
                {minicartVisible ? (
                    <div className="minicart">
                        <div className="minicart__header">My Bag, <span className="item-num">{itemsInCartNumber} items</span></div>
                        <ul className="minicart-products">
                            {productsInCart.map((itm, index) => {
                                return <MinicartItem key={`${itm.productId}_${index}`}
                                    productId={itm.productId}
                                    amount={itm.selectedProductCount}
                                    currency={activeCurrency}
                                    productInCart={itm}
                                />
                            })}
                        </ul>
                        <MinicartTotal productsInCart={productsInCart} activeCurrency={activeCurrency}/>
                        <div className="minicart-buttons">
                            <Link to="/cart" className="viewbag-btn minicart-btn">View bag</Link>
                            <div className="checkout-btn minicart-btn">Check out</div>
                        </div>
                    </div>) : null}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        activeCurrency: state.activeCurrency,
        itemsInCartNumber: state.itemsInCartNumber,
        productsInCart: state.productsInCart
    }
}

export default connect(mapStateToProps)(Minicart);