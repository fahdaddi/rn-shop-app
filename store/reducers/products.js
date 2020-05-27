import { Products, Deals } from '../../data/Products'
import { GET_PRODUCTS, GET_DEALS } from '../actions/products';
const initialState = {
    products: [],
    deals: Deals
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
            break;
        case GET_DEALS:
            return {
                ...state,
                deals: action.deals
            }
            break;

        default:
            break;
    }
    return state;
}

export default productsReducer