import React from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { addProductToCart } from '../../redux/actions';
import { PRODUCT_DETAILS } from "../../queries/queries"
import { graphql } from '@apollo/client/react/hoc';
import './PDP.scss'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class PDP extends React.Component {

    state = {
        selectedAttributes: {},
        selectedImage: 0
    };

    componentDidUpdate() {
        if (this.props.data && !this.props.data.error && !this.props.data.loading && this.props.data.product.inStock)
            this.setDefaultAttributes();
    }

    componentDidMount() {
        if (this.props.data && !this.props.data.error && !this.props.data.loading && this.props.data.product.inStock)
            this.setDefaultAttributes();

    }

    setDefaultAttributes = () => {
        if (Object.keys(this.state.selectedAttributes).length === 0) {
            this.props.data.product.attributes.forEach(element => {
                this.setActiveAttribute(element.name, element.items[0].displayValue)
            });
        }
    }

    setActiveAttribute = (attrName, attribute) => {
        this.setState((state) => {
            const attr = {
                ...state.selectedAttributes,
                [attrName]: attribute
            }
            return { selectedAttributes: attr }
        })
    }

    changeImage = (index) => {
        this.setState({ selectedImage: index })
    }

    showAttributes(attributes, inStock) {
        return attributes.map(item => {
            return (
                <div key={item.id} className="pdp-attr__row">
                    <div className="pdp-attr__header">{item.name}</div>
                    <ul className="pdp-attr__list">
                        {item.items.map((attrItem) => {
                            const swatch = (item.type === 'swatch' ? ' swatch' : '');
                            const displayValue = (item.type === 'swatch' ? '' : attrItem.displayValue);
                            const divStyle = (item.type === 'swatch' ? { backgroundColor: attrItem.value } : {});
                            const active = (this.state.selectedAttributes[item.name] === attrItem.displayValue) ? 'active' : '';
                            return (
                                <li key={attrItem.id}>
                                    {inStock ?
                                        <button className={'pdp-attr__btn ' + active + swatch} style={divStyle} onClick={() => this.setActiveAttribute(item.name, attrItem.displayValue)}>{displayValue}</button> :
                                        <button className={'pdp-attr__btn ' + swatch} style={divStyle}>{displayValue}</button>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    }

    onAddToCard = (productId) => {
        const productDetails = {
            productId: this.props.params.id,
            selectedAttributes: this.state.selectedAttributes,
            selectedProductCount: 1
        }
        this.props.addProductToCart(productDetails);
    }

    showPrice = (priceList, activeCurrency) => {
        let price = priceList.filter(item => item.currency.label === activeCurrency);
        return `${price[0].currency.symbol} ${price[0].amount}`
    }

    render() {
        const { data: { loading, error, product }, activeCurrency } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        const { brand, name, description, gallery, attributes, prices, inStock } = product;

        return (
            <div className="pdp">
                <div className="container">
                    <div className="product-description">
                        <div className="product-description__gallery gallery">
                            <div className="gallery__thumbs">
                                <ul className="pdp-thumbs">
                                    {gallery.map((img, index) =>
                                        <li key={img} className="pdp-thumbs__item" onClick={() => this.changeImage(index)}>
                                            <img src={img} alt="thumb" />
                                        </li>)}
                                </ul>
                            </div>
                            <div className="gallery__image">
                                <img src={gallery[this.state.selectedImage]} alt="product" />
                            </div>
                        </div>
                        <div className="product-description__details product-details">
                            <div className="product-details__header">
                                {brand}
                            </div>
                            <div className="product-details__subheader">
                                {name}
                            </div>
                            <div className="product-details__attr pdp-attr">
                                {this.showAttributes(attributes, inStock)}
                            </div>
                            <div className="product-details__price pdp-price">
                                <div className="pdp-price__header">
                                    Price:
                                </div>
                                <div className="pdp-price__amount">
                                    {this.showPrice(prices, activeCurrency)}
                                </div>
                            </div>
                            {inStock ?
                                <button onClick={this.onAddToCard} className="product-details__add-btn">
                                    Add to cart
                                </button> :
                                <div className="product-details__out-of-stock">Out of stock</div>
                            }
                            <p className="product-details__text">
                                {description.replace(/<[^>]+>/g, '')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        activeCurrency: state.activeCurrency,
    }
}

export default connect(mapStateToProps, { addProductToCart })(withParams(
    graphql(PRODUCT_DETAILS, {
        options: props => ({
            variables: {
                productId: props.params.id
            },
            fetchPolicy: 'no-cache'
        }),
    })(PDP)));