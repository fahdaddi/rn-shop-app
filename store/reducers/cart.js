import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, ADD_ITEMS_TO_STATE } from '../actions/cart';
const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS_TO_STATE:
            return { cart: action.products }
            break;
        case ADD_TO_CART:
            let newProduct = action.product;
            let index = state.cart.findIndex(item => item.id === newProduct.id);
            if (index >= 0) {
                updatedCart = [...state.cart];
                oldProduct = updatedCart[index];
                oldProduct.quantity++;
                updatedCart.splice(index, 1, oldProduct)
                return {...state, cart: updatedCart };
            } else {
                newProduct.quantity = 1;
                return {...state, cart: state.cart.concat(newProduct) };
            }
            break;
        case INCREMENT_QUANTITY:
            let productId = action.productId;
            index = state.cart.findIndex(item => item.id === productId);
            if (index >= 0) {
                updatedCart = [...state.cart];
                oldProduct = updatedCart[index];
                oldProduct.quantity++;
                updatedCart.splice(index, 1, oldProduct)
                return {...state, cart: updatedCart };
            }
            break;
        case DECREMENT_QUANTITY:
            productId = action.productId;
            index = state.cart.findIndex(item => item.id === productId);
            if (index >= 0) {
                updatedCart = [...state.cart];
                oldProduct = updatedCart[index];
                oldProduct.quantity--;
                updatedCart.splice(index, 1, oldProduct)
                return {...state, cart: updatedCart };
            }
        default:
            break;
    }
    return state;
}

export default cartReducer;