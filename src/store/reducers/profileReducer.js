import { PROFILE_DETAILS_START, PROFILE_DETAILS_SUCCESS, PROFILE_DETAILS_FAIL, USERS_START, USERS_SUCCESS, USERS_FAIL, NOT_FOLLOWED_USERS_START, NOT_FOLLOWED_USERS_SUCCESS, NOT_FOLLOWED_USERS_FAIL, FOLLOW_START, FOLLOW_SUCCESS, FOLLOW_FAIL } from '../actions';

const initialState = {
    profileDetailsLoading: false,
    profileDetails: {},
    usersLoading: false,
    users: [],
    notFollowedUsersLoading: false,
    notFollowedUsers: []
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DETAILS_START:
            return {
                ...state,
                profileDetailsLoading: true
            };
        case PROFILE_DETAILS_SUCCESS:
            return {
                ...state,
                profileDetailsLoading: false,
                profileDetails: action.data,
            };
        case PROFILE_DETAILS_FAIL:
            return {
                ...state,
                profileDetailsLoading: false
            };

        case USERS_START:
            return {
                ...state,
                usersLoading: true
            };
        case USERS_SUCCESS:
            return {
                ...state,
                usersLoading: false,
                users: action.data[0]?.page > 1
                    ? [...state.users, ...action.data]
                    : action.data,
            };
        case USERS_FAIL:
            return {
                ...state,
                usersLoading: false
            };
        case NOT_FOLLOWED_USERS_START:
            return {
                ...state,
                notFollowedUsersLoading: true
            };
        case NOT_FOLLOWED_USERS_SUCCESS:
            return {
                ...state,
                notFollowedUsersLoading: false,
                notFollowedUsers: action.data,
            };
        case NOT_FOLLOWED_USERS_FAIL:
            return {
                ...state,
                notFollowedUsersLoading: false
            };
        case FOLLOW_START:
            return {
                ...state,
            };
        case FOLLOW_SUCCESS:
            const followedID = action.data.followedID;
            const deleted = action.data.deleted;
            const newUsersData = state.users?.map((item) => {
                if (followedID == item._id) {
                    return {
                        ...item,
                        isFollowing: deleted ? null : action.data,
                        followers: deleted ? item.followers - 1 : item.followers + 1
                    }
                } else {
                    return item;
                }
            })
            return {
                ...state,
                users: newUsersData,
                profileDetails: followedID == state.profileDetails?._id ? {
                    ...state.profileDetails,
                    isFollowing: deleted ? null : action.data,
                    followers: deleted ? state.profileDetails.followers - 1 : state.profileDetails.followers + 1
                } : state.profileDetails
            };
        case FOLLOW_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
export default profileReducer;
