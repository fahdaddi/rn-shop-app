import { AsyncStorage, } from 'react-native'
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const ADD_ITEMS_TO_STATE = 'ADD_ITEMS_TO_STATE';

export const addItemsToState = products => {
    return { type: ADD_ITEMS_TO_STATE, products: products }
}

export const addToCart = (product) => {
    //TODO: save data with asyncStorage
    return async(dispatch, getState) => {

        await dispatch({ type: ADD_TO_CART, product: product });
        const products = getState().myCart.cart;

        saveProducts(products)
    }
}

export const incrementQuantity = (productId) => {
    return async(dispatch, getState) => {
        await dispatch({ type: INCREMENT_QUANTITY, productId: productId });
        const products = getState().myCart.cart;

        saveProducts(products)
    }
}

export const decrementQuantity = (productId) => {
    return async(dispatch, getState) => {
        await dispatch({ type: DECREMENT_QUANTITY, productId: productId });
        const products = getState().myCart.cart;

        saveProducts(products)
    }
}

const saveProducts = items => {
    console.log('added new item to storage');
    console.log(items);

    AsyncStorage.setItem('cartItems', JSON.stringify({ items: items }));
}