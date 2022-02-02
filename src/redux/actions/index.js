export const setActiveCategory = (category) => {
    return {
        type: 'SET_ACTIVE_CATEGORY',
        payload: category
    }
}

export const setActiveCurrency = (currency) => {
    return {
        type: 'SET_ACTIVE_CURRENCY',
        payload: currency
    }
}

export const addProductToCart = (productDetails) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: productDetails
    }
}

export const increaseProductInCartAmount = (productId, selectedAttributes) => {
    return {
        type: 'INCREASE_PRODUCT_AMOUNT',
        payload: {productId, selectedAttributes}
    }
}

export const decreaseProductInCartAmount = (productId, selectedAttributes) => {
    return {
        type: 'DECREASE_PRODUCT_AMOUNT',
        payload: {productId, selectedAttributes}
    }
}

