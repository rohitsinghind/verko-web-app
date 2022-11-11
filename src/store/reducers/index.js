import { combineReducers } from 'redux';

// reducer import
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import chatReducer from './chatReducer';
import discussionReducer from './discussionReducer';
import notificationReducer from './notificationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    authReducer,
    profileReducer,
    postReducer,
    chatReducer,
    discussionReducer,
    notificationReducer,
});

export default reducer;
