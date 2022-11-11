import {
    ADD_DISCUSSION_COMMENT_FAIL,
    ADD_DISCUSSION_COMMENT_START,
    ADD_DISCUSSION_COMMENT_SUCCESS,
    ADD_DISCUSSION_REACT_FAIL,
    ADD_DISCUSSION_REACT_START,
    ADD_DISCUSSION_REACT_SUCCESS,
    DISCUSSIONS_FAIL,
    DISCUSSIONS_START,
    DISCUSSIONS_SUCCESS,
    DISCUSSION_COMMENTS_FAIL,
    DISCUSSION_COMMENTS_START,
    DISCUSSION_COMMENTS_SUCCESS,
    USER_DISCUSSIONS_FAIL,
    USER_DISCUSSIONS_START,
    USER_DISCUSSIONS_SUCCESS
} from '../actions';

const initialState = {
    discussionLoading: false,
    discussions: [],
    discussionCommentsLoading: false,
    discussionComments: [],
    userDiscussionLoading: false,
    userDiscussions: [],
};

const discussionReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISCUSSIONS_START:
            return {
                ...state,
                discussionLoading: true
            };
        case DISCUSSIONS_SUCCESS:
            return {
                ...state,
                discussionLoading: false,
                discussions: action.data[0]?.page > 1
                    ? [...state.discussions, ...action.data]
                    : action.data,
            };
        case DISCUSSIONS_FAIL:
            return {
                ...state,
                discussionLoading: false
            };
        case USER_DISCUSSIONS_START:
            return {
                ...state,
                userDiscussionLoading: true
            };
        case USER_DISCUSSIONS_SUCCESS:
            const pushData = action.data[0]?.page > 1 && state.userDiscussions && state.userDiscussions.length > 0 && state.userDiscussions[0].userID?._id == action.data[0]?.userID?._id
            return {
                ...state,
                userDiscussionLoading: false,
                userDiscussions:
                    pushData
                        ? [...state.userDiscussions, ...action.data]
                        : action.data,
            };
        case USER_DISCUSSIONS_FAIL:
            return {
                ...state,
                userDiscussionLoading: false
            };
        case DISCUSSION_COMMENTS_START:
            return {
                ...state,
                discussionCommentsLoading: true
            };
        case DISCUSSION_COMMENTS_SUCCESS:
            return {
                ...state,
                discussionCommentsLoading: false,
                discussionComments: action.data[0]?.page > 1
                    ? [...state.discussionComments, ...action.data]
                    : action.data,
            };
        case DISCUSSION_COMMENTS_FAIL:
            return {
                ...state,
                discussionCommentsLoading: false
            };
        case ADD_DISCUSSION_COMMENT_START:
            return {
                ...state,
            };
        case ADD_DISCUSSION_COMMENT_SUCCESS:
            const updateCommentDiscussions = state.discussions?.map((item) => {
                if (action.data.sourceID == item._id) {
                    return { ...item, commentCount: item.commentCount + 1 }
                } else {
                    return item;
                }
            })
            const updateCommentUserDiscussions = state.userDiscussions?.map((item) => {
                if (action.data.sourceID == item._id) {
                    return { ...item, commentCount: item.commentCount + 1 }
                } else {
                    return item;
                }
            })
            const cSourceID = state.discussionComments.length > 0 ? state.discussionComments[0].sourceID : null;
            return {
                ...state,
                discussions: updateCommentDiscussions,
                userDiscussions: updateCommentUserDiscussions,
                discussionComments: cSourceID == action.data.sourceID
                    ? [action.data, ...state.discussionComments]
                    : [action.data],
            };
        case ADD_DISCUSSION_COMMENT_FAIL:
            return {
                ...state,
            };

        case ADD_DISCUSSION_REACT_START:
            return {
                ...state,
            };
        case ADD_DISCUSSION_REACT_SUCCESS:
            const sourceID = action.data.sourceID;
            const deleted = action.data.deleted;
            const newDiscussionssData = state.discussions?.map((item) => {
                if (sourceID == item._id) {
                    return { ...item, react: deleted ? null : action.data, reactCount: deleted ? (item.reactCount > 0 ? item.reactCount - 1 : 0) : item.reactCount + 1 }
                } else {
                    return item;
                }
            })
            const newUserDiscussionsData = state.userDiscussions?.map((item) => {
                if (sourceID == item._id) {
                    return { ...item, react: deleted ? null : action.data, reactCount: deleted ? (item.reactCount > 0 ? item.reactCount - 1 : 0) : item.reactCount + 1 }
                } else {
                    return item;
                }
            })
            return {
                ...state,
                discussions: newDiscussionssData,
                userDiscussions: newUserDiscussionsData
            };
        case ADD_DISCUSSION_REACT_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default discussionReducer;
