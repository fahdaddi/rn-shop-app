import { AUTHENTICATE } from '../actions/user';

const initialState = {
    user: {},
    token: null,
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
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