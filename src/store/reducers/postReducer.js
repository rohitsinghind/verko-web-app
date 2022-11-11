import {
    POSTS_CLEAR_SUCCESS,
    POSTS_FAIL,
    POSTS_START,
    POSTS_SUCCESS,
    POST_COMMENTS_START,
    POST_COMMENTS_SUCCESS,
    POST_COMMENTS_FAIL,
    ADD_POST_COMMENT_START,
    ADD_POST_COMMENT_SUCCESS,
    ADD_POST_COMMENT_FAIL,
    ADD_POST_REACT_START,
    ADD_POST_REACT_SUCCESS,
    ADD_POST_REACT_FAIL,
    USER_POSTS_START,
    USER_POSTS_SUCCESS,
    USER_POSTS_FAIL,
    NOT_LIKED_POSTS_START,
    NOT_LIKED_POSTS_FAIL,
    NOT_LIKED_POSTS_SUCCESS
} from '../actions';

const initialState = {
    postLoading: false,
    posts: [],
    userPostLoading: false,
    userPosts: [],
    postCommentsLoading: false,
    postComments: [],
    unlikedPostsLoading: false,
    unlikedPosts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_START:
            return {
                ...state,
                postLoading: true
            };
        case POSTS_SUCCESS:
            return {
                ...state,
                postLoading: false,
                posts:
                    action.data[0]?.page > 1
                        ? [...state.posts, ...action.data]
                        : action.data,
            };
        case POSTS_FAIL:
            return {
                ...state,
                postLoading: false
            };
        case POSTS_CLEAR_SUCCESS:
            return {
                ...state,
                postLoading: false,
                posts: []
            };
        case USER_POSTS_START:
            return {
                ...state,
                userPostLoading: true
            };
        case USER_POSTS_SUCCESS:
            const pushData = action.data[0]?.page > 1 && state.userPosts && state.userPosts.length > 0 && state.userPosts[0].userID?._id == action.data[0]?.userID?._id
            return {
                ...state,
                userPostLoading: false,
                userPosts:
                    pushData
                        ? [...state.userPosts, ...action.data]
                        : action.data,
            };
        case USER_POSTS_FAIL:
            return {
                ...state,
                userPostLoading: false
            };
        case POST_COMMENTS_START:
            return {
                ...state,
                postCommentsLoading: true
            };
        case POST_COMMENTS_SUCCESS:
            return {
                ...state,
                postCommentsLoading: false,
                postComments:
                    action.data[0]?.page > 1
                        ? [...state.postComments, ...action.data]
                        : action.data,
            };
        case POST_COMMENTS_FAIL:
            return {
                ...state,
                postCommentsLoading: false
            };

        case ADD_POST_COMMENT_START:
            return {
                ...state,
            };
        case ADD_POST_COMMENT_SUCCESS:
            const updateCommentPosts = state.posts?.map((item) => {
                if (action.data.postID == item._id) {
                    return { ...item, commentCount: item.commentCount + 1 }
                } else {
                    return item;
                }
            })
            const updateCommentUserPosts = state.userPosts?.map((item) => {
                if (action.data.postID == item._id) {
                    return { ...item, commentCount: item.commentCount + 1 }
                } else {
                    return item;
                }
            })
            const cPostID = state.postComments.length > 0 ? state.postComments[0].postID : null;
            return {
                ...state,
                posts: updateCommentPosts,
                userPosts: updateCommentUserPosts,
                postComments: cPostID == action.data.postID
                    ? [action.data, ...state.postComments]
                    : [action.data],
            };
        case ADD_POST_COMMENT_FAIL:
            return {
                ...state,
            };

        case ADD_POST_REACT_START:
            return {
                ...state,
            };
        case ADD_POST_REACT_SUCCESS:
            const postID = action.data.postID;
            const deleted = action.data.deleted;
            const newPostsData = state.posts?.map((item) => {
                if (postID == item._id) {
                    return { ...item, react: deleted ? null : action.data, reactCount: deleted ? item.reactCount - 1 : item.reactCount + 1 }
                } else {
                    return item;
                }
            })
            const newUserPostsData = state.userPosts?.map((item) => {
                if (postID == item._id) {
                    return { ...item, react: deleted ? null : action.data, reactCount: deleted ? item.reactCount - 1 : item.reactCount + 1 }
                } else {
                    return item;
                }
            })
            return {
                ...state,
                posts: newPostsData,
                userPosts: newUserPostsData
            };
        case ADD_POST_REACT_FAIL:
            return {
                ...state,
            };
        case NOT_LIKED_POSTS_START:
            return {
                ...state,
                unlikedPostsLoading: true
            };
        case NOT_LIKED_POSTS_SUCCESS:
            return {
                ...state,
                unlikedPostsLoading: false,
                unlikedPosts: action.data,
            };
        case NOT_LIKED_POSTS_FAIL:
            return {
                ...state,
                unlikedPostsLoading: false
            };
        default:
            return state;
    }
};
export default postReducer;
