import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { graphql } from '@apollo/client/react/hoc';
import { GET_PRODUCTS_BY_CATEGORY } from "../../queries/queries"
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.scss';

class ProductList extends React.Component {

    showProducts = (products, activeCurrency) => {
        return products.map(itm => (<ProductCard key={itm.id} product={itm} activeCurrency={activeCurrency} inStock={itm.inStock} />));
    }

    render() {
        const { data: { loading, error, category },
            activeCurrency,
        } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        const {categoryName, products} = category;

        return (
            <div className="category">
                <div className="container">
                    <h1 className='category__header'>{categoryName}</h1>
                    <div className="category__wrapper">
                        {this.showProducts(products, activeCurrency)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        activeCategory: state.activeCategory,
        activeCurrency: state.activeCurrency
    }
}

export default compose(
    connect(mapStateToProps),
    graphql(GET_PRODUCTS_BY_CATEGORY, {
        options: props => ({
            variables: {
                categoryName: { title: props.activeCategory }
            },
            fetchPolicy: 'no-cache'
        }),
    })
)(ProductList);

