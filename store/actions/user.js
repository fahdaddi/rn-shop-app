import { APIKEY } from '../../constants/firebase';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const resData = await response.json();

        if (!response.ok) {
            throw new Error(resData.error.message);
        }
        dispatch({
            type: SIGN_UP,
            user: resData,
            userId: resData.localId,
            token: resData.idToken
        });
    };
}

export const signIn = (email, password) => {
    return async dispatch => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const resData = await response.json();
        console.log(resData);
        if (!response.ok) {
            throw new Error(resData.error.message);
        }
        dispatch({
            type: SIGN_IN,
            user: resData,
            userId: resData.localId,
            token: resData.idToken
        });
    };
}