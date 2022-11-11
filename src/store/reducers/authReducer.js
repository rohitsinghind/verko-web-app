import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

const initialState = {
    logoutLoading: false,
    loading: false,
    loggedIn: false,
    userData: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.data,
                loggedIn: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false
            };
    
        default:
            return state;
    }
};
export default authReducer;
