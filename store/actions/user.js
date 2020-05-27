import { AsyncStorage } from 'react-native';

import { APIKEY } from '../../constants/firebase';

export const AUTHENTICATE = 'AUTHENTICATE';

// TODO LATER : REMEMBER ME func.
export const authenticate = (refreshToken, userId) => {
    return async dispatch => {
        const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${APIKEY}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            })
        })
        const resData = await response.json();

        if (!response.ok) {
            throw new Error(resData.error.message);
        }

        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expires_in) * 1000);
        saveData(resData.refreshToken, resData.localId, expirationDate);
        dispatch({
            type: AUTHENTICATE,
            user: resData,
            userId: resData.localId,
            token: resData.idToken
        });
    };
};

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

        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000)
        saveData(resData.refreshToken, resData.localId, expirationDate)
        dispatch({
            type: AUTHENTICATE,
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
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000)
        saveData(resData.refreshToken, resData.localId, expirationDate)
        dispatch({
            type: AUTHENTICATE,
            user: resData,
            userId: resData.localId,
            token: resData.idToken
        });
    };
}

const saveData = (token, userId, expirationDate) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token,
        user_id: userId,
        expiration_date: expirationDate.toISOString()
    }))
}