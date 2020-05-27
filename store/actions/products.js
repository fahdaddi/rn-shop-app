import { BASE_URL } from '../../constants/firebase';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_DEALS = 'GET_DEALS';

export const StoreProduct = (data) => {
    return async(dispatch, getState) => {
        const token = getState().user.token;
        const response = await fetch(`${BASE_URL}/project.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();

        if (!response.ok) {
            throw new Error(resData.error.message);
        }
        dispatch({
            type: 'null',
        });
    };
}

export const getProducts = () => {
        return async(dispatch, getState) => {
                const token = getState().user.token;
                const response = await fetch(`${BASE_URL}/project.json${token ? `?auth=${token}` : ``}`)
        const resData = await response.json();

        let products = []
        for (let obj in resData) {
            resData[obj].id = obj;
            products.push(resData[obj]);
        }

        if (!response.ok) {
            throw new Error(resData.error.message);
        }

        dispatch({
            type: GET_PRODUCTS,
            products: products
        });
    };
}

export const getDeals = () => {
    return async (dispatch, getState) => {
        const token = getState().user.token;
        const response = await fetch(`${BASE_URL}/deals.json${token ? `?auth=${token}` : ``}`)
        const resData = await response.json();
        console.log('dataa', resData);
        let deals = []
        for (let obj in resData) {
            resData[obj].id = obj;
            deals.push(resData[obj]);
        }

        if (!response.ok) {

            throw new Error(resData.error.message);
        }

        dispatch({
            type: GET_DEALS,
            deals: deals.length > 0 ? deals : []
        });
    };
}