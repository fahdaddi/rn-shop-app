import { SIGN_IN, SIGN_UP } from '../actions/user';

const initialState = {
    user: {},
    token: null,
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                user: action.user,
                token: action.token,
                isAuth: true
            }
            break;
        case SIGN_UP:
            return {
                user: action.user,
                token: action.token,
                isAuth: true
            }
            break;
        default:
            break;
    }
    return state;
}

export default userReducer