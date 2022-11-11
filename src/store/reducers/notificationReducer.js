import {
    DELETE_NOTIFICATIONS_FAIL,
    DELETE_NOTIFICATIONS_START,
    DELETE_NOTIFICATIONS_SUCCESS,
    NOTIFICATIONS_FAIL,
    NOTIFICATIONS_START,
    NOTIFICATIONS_SUCCESS,
    READ_NOTIFICATIONS_FAIL,
    READ_NOTIFICATIONS_START,
    READ_NOTIFICATIONS_SUCCESS
} from '../actions';

const initialState = {
    notificationLoading: false,
    notifications: [],
    totalNotification: 0,
    currentPage: 1,
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATIONS_START:
            return {
                ...state,
                notificationLoading: true
            };
        case NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notificationLoading: false,
                totalNotification: action.data.count,
                currentPage: action.data.page,
                notifications:
                    action.data.page > 1
                        ? [...state.notifications, ...action.data.notifications]
                        : action.data.notifications,
            };
        case NOTIFICATIONS_FAIL:
            return {
                ...state,
                notificationLoading: false
            };
        case READ_NOTIFICATIONS_START:
            return {
                ...state,
            };

        case READ_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
            };
        case READ_NOTIFICATIONS_FAIL:
            return {
                ...state,
            };
        case DELETE_NOTIFICATIONS_START:
            return {
                ...state,
            };
        case DELETE_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
            };
        case DELETE_NOTIFICATIONS_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default notificationReducer;
