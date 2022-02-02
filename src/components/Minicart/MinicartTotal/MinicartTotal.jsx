import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import { useParams } from "react-router-dom";
import { GET_PRICES } from "../../../queries/queries"


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


class MinicartTotal extends React.Component {

    countTotal(products, productsInCart, activeCurrency) {
        let sum = 0;

        productsInCart.forEach(element => {
            const productFound = products.filter(itm => itm.id === element.productId)[0];
            const price = productFound.prices.filter(itm => itm.currency.label === activeCurrency)[0];
            sum += price.amount * element.selectedProductCount;
        });

        return sum.toFixed(2);
    }

    render() {
        const { data: { loading, error, category }, productsInCart, activeCurrency } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        const { products } = category;



        return (
            <div className="minicart-total">
                <div className="minicart-total__header">Total:</div>
                <div className="minicart-total__sum">{this.countTotal(products, productsInCart, activeCurrency)}</div>
            </div>
        )
    }
}


export default withParams(graphql(GET_PRICES)(MinicartTotal));