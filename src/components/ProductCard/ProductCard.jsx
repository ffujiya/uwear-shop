import React from "react";
import { connect } from 'react-redux';
import { addProductToCart } from '../../redux/actions'
import { Link } from "react-router-dom";
import "./ProductCard.scss"

class ProductCard extends React.Component {

    addDefaultToCart = (product, e) => {
        e.preventDefault();
        let defaultAttributes = {};
        product.attributes.forEach(element => {
            defaultAttributes = {
                ...defaultAttributes,
                [element.name]: element.items[0].displayValue
            }

        });
        const productDetails = {
            productId: product.id,
            selectedAttributes: defaultAttributes,
            selectedProductCount: 1
        }
        this.props.addProductToCart(productDetails);
    }

    showPrice = (priceList, activeCurrency) => {
        let price = priceList.filter(item => item.currency.label === activeCurrency);
        return `${price[0].currency.symbol} ${price[0].amount}`
    }

    render() {

        const { product, activeCurrency, inStock } = this.props;

        return (
            <div className='product-card'>
                <Link to={`/products/` + product.id}>
                    <div className="product-card__image">
                        {inStock ? null : <div className="product-card__outofstock">Out of stock</div>}
                        <img src={product.gallery[0]} alt="product" />
                        {inStock ? <button className="add-to-card" onClick={(e) => this.addDefaultToCart(product, e)}></button> : null}
                    </div>
                    <div className="product-card__text">
                        {product.name}
                    </div>
                    <div className="product-card__price">
                        {this.showPrice(product.prices, activeCurrency)}
                    </div>
                </Link>
            </div>
        )
    }
}

export default connect(null, { addProductToCart })(ProductCard)