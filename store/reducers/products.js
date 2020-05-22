import { Products, Deals } from '../../data/Products'

const initialState = {
    products: Products,
    deals: Deals
}

const productsReducer = (state = initialState, action) => {
    return state;
}

export default productsReducer