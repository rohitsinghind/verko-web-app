import { put, takeEvery, call } from 'redux-saga/effects';
import {
    DISCUSSIONS_SUCCESS,
    DISCUSSIONS_FAIL,
    DISCUSSIONS_START,
    DISCUSSION_COMMENTS_SUCCESS,
    DISCUSSION_COMMENTS_FAIL,
    DISCUSSION_COMMENTS_START,
    ADD_DISCUSSION_COMMENT_SUCCESS,
    ADD_DISCUSSION_COMMENT_FAIL,
    ADD_DISCUSSION_REACT_SUCCESS,
    ADD_DISCUSSION_REACT_FAIL,
    ADD_DISCUSSION_REACT_START,
    ADD_DISCUSSION_COMMENT_START,
    USER_DISCUSSIONS_SUCCESS,
    USER_DISCUSSIONS_FAIL,
    USER_DISCUSSIONS_START,
    CREATE_DISCUSSION_SUCCESS,
    CREATE_DISCUSSION_FAIL,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAIL,
    CHANGE_DISCUSSION_STATUS_SUCCESS,
    CHANGE_DISCUSSION_STATUS_FAIL,
    CREATE_DISCUSSION_START,
    UPDATE_DISCUSSION_START,
    CHANGE_DISCUSSION_STATUS_START

} from 'store/actions';
import Fetch from '../../network';
import {
    ADD_DISCUSSION_COMMENT,
    ADD_DISCUSSION_REACT,
    GET_DISCUSSIONS,
    GET_DISCUSSION_COMMENTS,
    GET_USER_DISCUSSIONS,
    CREATE_DISCUSSION,
    UPDATE_DISCUSSION,
    CHANGE_DISCUSSION_STATUS
} from '../constant';



function* createDiscussion(action) {
    try {
        const params = action.params;
        const image = action.images;
        console.log(params,image);
        const response = yield call(new Fetch().axiosFormDataRequest, 'POST', CREATE_DISCUSSION, params, image);
        console.log(response);
        if (response.status === 200) {
            action.callBack('success', 'Discussion created');
            yield put({ type: CREATE_DISCUSSION_SUCCESS, data: response.data });
        } else {
            action.callBack('error', 'Something went wrong.');
            yield put({ type: CREATE_DISCUSSION_FAIL });
        }
    } catch (err) {
        action.callBack('error', 'Something went wrong.');
        yield put({ type: CREATE_DISCUSSION_FAIL });
    }
}

function* updateDiscussion(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', UPDATE_DISCUSSION, params);
        if (response.status === 200) {
            action.callBack('success', 'Discussion updated');
            yield put({ type: UPDATE_DISCUSSION_SUCCESS, data: response.data });
        } else {
            action.callBack('error', 'Something went wrong.');
            yield put({ type: UPDATE_DISCUSSION_FAIL });
        }
    } catch (err) {
        action.callBack('error', 'Something went wrong.');
        yield put({ type: UPDATE_DISCUSSION_FAIL });
    }
}

function* changeDiscussionStatus(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', CHANGE_DISCUSSION_STATUS, params);
        if (response.status === 200) {
            action.callBack('success', 'Discussion deleted');
            yield put({ type: CHANGE_DISCUSSION_STATUS_SUCCESS, data: response.data });
        } else {
            action.callBack('error', 'Something went wrong.');
            yield put({ type: CHANGE_DISCUSSION_STATUS_FAIL });
        }
    } catch (err) {
        action.callBack('error', 'Something went wrong.');
        yield put({ type: CHANGE_DISCUSSION_STATUS_FAIL });
    }
}


function* getDiscussionPosts(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_DISCUSSIONS, params);
        if (response.status === 200) {
            yield put({ type: DISCUSSIONS_SUCCESS, data: response.data });
        } else {
            yield put({ type: DISCUSSIONS_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: DISCUSSIONS_FAIL });
    }
}

function* getDiscussionComments(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_DISCUSSION_COMMENTS, params);
        if (response.status === 200) {
            yield put({ type: DISCUSSION_COMMENTS_SUCCESS, data: response.data });
        } else {
            yield put({ type: DISCUSSION_COMMENTS_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: DISCUSSION_COMMENTS_FAIL });
    }
}
function* getUserDiscussions(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_USER_DISCUSSIONS, params);
        if (response.status === 200) {
            yield put({ type: USER_DISCUSSIONS_SUCCESS, data: response.data });
        } else {
            yield put({ type: USER_DISCUSSIONS_FAIL });
        }
    } catch (err) {
        yield put({ type: USER_DISCUSSIONS_FAIL });
    }
}
function* comment(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', ADD_DISCUSSION_COMMENT, params);
        if (response.status === 200) {
            yield put({ type: ADD_DISCUSSION_COMMENT_SUCCESS, data: response.data });
        } else {
            action.callback({ message: response.message }, null);
            yield put({ type: ADD_DISCUSSION_COMMENT_FAIL });
        }
    } catch (err) {
        yield put({ type: ADD_DISCUSSION_COMMENT_FAIL });
    }
}


function* react(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', ADD_DISCUSSION_REACT, params);
        if (response.status === 200) {
            action.callBack(response.data);
            yield put({ type: ADD_DISCUSSION_REACT_SUCCESS, data: response.data });
        } else {
            yield put({ type: ADD_DISCUSSION_REACT_FAIL });
        }
    } catch (err) {
        yield put({ type: ADD_DISCUSSION_REACT_FAIL });
    }
}

export function* watchCreateDiscussion() {
    yield takeEvery(CREATE_DISCUSSION_START, createDiscussion);
}

export function* watchUpdateDiscussion() {
    yield takeEvery(UPDATE_DISCUSSION_START, updateDiscussion);
}

export function* watchChangeDiscussionStatus() {
    yield takeEvery(CHANGE_DISCUSSION_STATUS_START, changeDiscussionStatus);
}


export function* watchGetDiscussionPosts() {
    yield takeEvery(DISCUSSIONS_START, getDiscussionPosts);
}

export function* watchGetDiscussionComments() {
    yield takeEvery(DISCUSSION_COMMENTS_START, getDiscussionComments);
}
export function* watchGetUserDiscussion() {
    yield takeEvery(USER_DISCUSSIONS_START, getUserDiscussions);
}

export function* watchDiscussionComment() {
    yield takeEvery(ADD_DISCUSSION_COMMENT_START, comment);
}

export function* watchDiscussionReact() {
    yield takeEvery(ADD_DISCUSSION_REACT_START, react);
}
