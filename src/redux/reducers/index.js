const initialState = {
    activeCategory: 'all',
    activeCurrency: 'USD',
    itemsInCartNumber: 0,
    currencyListVisible: false,
    minicartVisible: false,
    productsInCart: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CATEGORY': {
            return {
                ...state,
                activeCategory: action.payload
            }
        }
        case 'SET_ACTIVE_CURRENCY': {
            return {
                ...state,
                activeCurrency: action.payload
            }
        }
        case 'ADD_PRODUCT_TO_CART': {
            let products = [...state.productsInCart];
            let found = false;
            for (let item of products) {
                if (item.productId === action.payload.productId && JSON.stringify(item.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes)) {
                    found = true;
                    item.selectedProductCount++;
                }
            }
            if (!found) products.push(action.payload);
            return {
                ...state,
                productsInCart: [...products],
                itemsInCartNumber: state.itemsInCartNumber + 1
            }
        }
        case 'INCREASE_PRODUCT_AMOUNT': {
            let products = [...state.productsInCart];
            let itemNum = state.itemsInCartNumber;
            for (let item of products) {
                if (item.productId === action.payload.productId && item.selectedAttributes === action.payload.selectedAttributes) {
                    item.selectedProductCount++;
                }
            }
            return {
                ...state,
                productsInCart: [...products],
                itemsInCartNumber: ++itemNum
            }
        }
        case 'DECREASE_PRODUCT_AMOUNT': {
            let deleteIndex = null;
            let products = [...state.productsInCart];
            let itemNum = state.itemsInCartNumber;
            for (let [index, item] of products.entries()) {
                if (item.productId === action.payload.productId && item.selectedAttributes === action.payload.selectedAttributes) {
                    if (item.selectedProductCount > 1) {
                        item.selectedProductCount--;
                    } else {
                        deleteIndex = index;
                    }
                }
            }

            if (deleteIndex !== null) products.splice(deleteIndex, 1);
            return {
                ...state,
                productsInCart: [...products],
                itemsInCartNumber: --itemNum
            }
        }


        default:
            return state;
    }
}

export default reducer;