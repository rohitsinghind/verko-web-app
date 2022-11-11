import { put, takeEvery, call } from 'redux-saga/effects';
import {
    POSTS_START, POSTS_SUCCESS, POSTS_FAIL, POSTS_CLEAR, POSTS_CLEAR_SUCCESS, POST_COMMENTS_SUCCESS,
    POST_COMMENTS_FAIL, POST_COMMENTS_START, ADD_POST_COMMENT_SUCCESS, ADD_POST_COMMENT_FAIL,
    ADD_POST_REACT_SUCCESS, ADD_POST_REACT_FAIL, ADD_POST_COMMENT_START, ADD_POST_REACT_START,
    USER_POSTS_SUCCESS, USER_POSTS_FAIL, USER_POSTS_START, NOT_LIKED_POSTS_START,
    TEST_REACT_START, NOT_LIKED_POSTS_SUCCESS, NOT_LIKED_POSTS_FAIL, TEST_REACT_SUCCESS, TEST_REACT_FAIL, CREATE_POST_SUCCESS, CREATE_POST_FAIL, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL, CHANGE_POST_STATUS_SUCCESS, CHANGE_POST_STATUS_FAIL, CREATE_POST_START, UPDATE_POST_START, CHANGE_POST_STATUS_START
} from 'store/actions';
import Fetch from '../../network';
import { ADD_POST_COMMENT, ADD_POST_REACT, CHANGE_POST_STATUS, CREATE_POST, GET_NOT_LIKED_POSTS, GET_POSTS, GET_POST_COMMENTS, GET_USER_POSTS, TEST_REACT, UPDATE_POST } from '../constant';

function* createPost(action) {
    try {
        const params = action.params;
        const image = action.images;
        const response = yield call(new Fetch().axiosFormDataRequest, 'POST', CREATE_POST, params, image);
        console.log(response)
        if (response.status === 200) {
            action.callBack('success', 'Post created');
            yield put({ type: CREATE_POST_SUCCESS, data: response.data });
        } else {
            action.callBack('error', 'Something went wrong.');
            yield put({ type: CREATE_POST_FAIL });
        }
    } catch (err) {
        action.callBack('error', 'Something went wrong.');
        yield put({ type: CREATE_POST_FAIL });
    }
}

function* updatePost(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', UPDATE_POST, params);
        if (response.status === 200) {
            action.callBack('success', 'Post updated');
            yield put({ type: UPDATE_POST_SUCCESS, data: response.data });
        } else {
            action.callBack('error', 'Something went wrong.');
            yield put({ type: UPDATE_POST_FAIL });
        }
    } catch (err) {
        action.callBack('error', 'Something went wrong.');
        yield put({ type: UPDATE_POST_FAIL });
    }
}

function* changePostStatus(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', CHANGE_POST_STATUS, params);
        if (response.status === 200) {
            action.callBack('success', 'Post deleted');
            yield put({ type: CHANGE_POST_STATUS_SUCCESS, data: response.data });
        } else {
            action.callBack('error', 'Something went wrong.');
            yield put({ type: CHANGE_POST_STATUS_FAIL });
        }
    } catch (err) {
        action.callBack('error', 'Something went wrong.');
        yield put({ type: CHANGE_POST_STATUS_FAIL });
    }
}
function* getPosts(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_POSTS, params);
        if (response.status === 200) {
            yield put({ type: POSTS_SUCCESS, data: response.data });
        } else {
            yield put({ type: POSTS_FAIL });
        }
    } catch (err) {
        yield put({ type: POSTS_FAIL });
    }
}

function* getUserPosts(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_USER_POSTS, params);
        if (response.status === 200) {
            yield put({ type: USER_POSTS_SUCCESS, data: response.data });
        } else {
            yield put({ type: USER_POSTS_FAIL });
        }
    } catch (err) {
        yield put({ type: USER_POSTS_FAIL });
    }
}

function* getPostComments(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_POST_COMMENTS, params);
        if (response.status === 200) {
            yield put({ type: POST_COMMENTS_SUCCESS, data: response.data });
        } else {
            yield put({ type: POST_COMMENTS_FAIL });
        }
    } catch (err) {
        yield put({ type: POST_COMMENTS_FAIL });
    }
}

function* comment(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', ADD_POST_COMMENT, params);
        if (response.status === 200) {
            action.callBack(response.data);
            yield put({ type: ADD_POST_COMMENT_SUCCESS, data: response.data });
        } else {
            yield put({ type: ADD_POST_COMMENT_FAIL });
        }
    } catch (err) {
        yield put({ type: ADD_POST_COMMENT_FAIL });
    }
}


function* react(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', ADD_POST_REACT, params);
        if (response.status === 200) {
            action.callBack(response.data);
            yield put({ type: ADD_POST_REACT_SUCCESS, data: response.data });
        } else {
            yield put({ type: ADD_POST_REACT_FAIL });
        }
    } catch (err) {
        yield put({ type: ADD_POST_REACT_FAIL });
    }
}

function* clearAllPosts() {
    yield put({ type: POSTS_CLEAR_SUCCESS })
}

function* getNotLikedPosts(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_NOT_LIKED_POSTS, params);
        console.log(response);
        if (response.status === 200) {
            yield put({ type: NOT_LIKED_POSTS_SUCCESS, data: response.data });
        } else {
            yield put({ type: NOT_LIKED_POSTS_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: NOT_LIKED_POSTS_FAIL });
    }
}

function* testReact(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', TEST_REACT, params);
        if (response.status === 200) {
            action.callBack(null, 'success');
            yield put({ type: TEST_REACT_SUCCESS, data: response.data });
        } else {
            action.callBack('error', null);
            yield put({ type: TEST_REACT_FAIL });
        }
    } catch (err) {
        action.callBack('error', null);
        yield put({ type: TEST_REACT_FAIL });
    }
}


export function* watchCreatePosts() {
    yield takeEvery(CREATE_POST_START, createPost);
}

export function* watchUpdatePosts() {
    yield takeEvery(UPDATE_POST_START, updatePost);
}

export function* watchChangePostStatus() {
    yield takeEvery(CHANGE_POST_STATUS_START, changePostStatus);
}

export function* watchGetPosts() {
    yield takeEvery(POSTS_START, getPosts);
}

export function* watchGetUserPosts() {
    yield takeEvery(USER_POSTS_START, getUserPosts);
}

export function* watchGetPostComments() {
    yield takeEvery(POST_COMMENTS_START, getPostComments);
}

export function* watchClearPosts() {
    yield takeEvery(POSTS_CLEAR, clearAllPosts);
}

export function* watchPostComment() {
    yield takeEvery(ADD_POST_COMMENT_START, comment);
}

export function* watchPostReact() {
    yield takeEvery(ADD_POST_REACT_START, react);
}

export function* watchGetNotLikedPosts() {
    yield takeEvery(NOT_LIKED_POSTS_START, getNotLikedPosts);
}

export function* watchTestReact() {
    yield takeEvery(TEST_REACT_START, testReact);
}