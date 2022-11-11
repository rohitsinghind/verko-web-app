import { put, takeEvery, call } from 'redux-saga/effects';
import { PROFILE_DETAILS_SUCCESS, PROFILE_DETAILS_FAIL, PROFILE_DETAILS_START, USERS_SUCCESS, USERS_FAIL, USERS_START, NOT_FOLLOWED_USERS_SUCCESS, NOT_FOLLOWED_USERS_FAIL, TEST_FOLLOW_SUCCESS, TEST_FOLLOW_FAIL, NOT_FOLLOWED_USERS_START, TEST_FOLLOW_START, FOLLOW_SUCCESS, FOLLOW_FAIL, FOLLOW_START } from 'store/actions';
import Fetch from '../../network';
import { FOLLOW, GET_NOT_FOLLOWED_USERS, GET_USERS, GET_USER_DETAILS, TEST_FOLLOW } from '../constant';

function* profileDetails(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_USER_DETAILS, params);
        if (response.status === 200) {
            yield put({ type: PROFILE_DETAILS_SUCCESS, data: response.data });
        } else {
            yield put({ type: PROFILE_DETAILS_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: PROFILE_DETAILS_FAIL });
    }
}

function* getUsers(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_USERS, params);
        if (response.status === 200) {
            yield put({ type: USERS_SUCCESS, data: response.data });
        } else {
            yield put({ type: USERS_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: USERS_FAIL });
    }
}

function* getNotFollowedUsers(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_NOT_FOLLOWED_USERS, params);
        if (response.status === 200) {
            yield put({ type: NOT_FOLLOWED_USERS_SUCCESS, data: response.data });
        } else {
            yield put({ type: NOT_FOLLOWED_USERS_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: NOT_FOLLOWED_USERS_FAIL });
    }
}

function* testFollow(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', TEST_FOLLOW, params);
        if (response.status === 200) {
            action.callBack(null, 'success');
            yield put({ type: TEST_FOLLOW_SUCCESS, data: response.data });
        } else {
            action.callBack('error', null);
            yield put({ type: TEST_FOLLOW_FAIL });
        }
    } catch (err) {
        action.callBack('error', null);
        yield put({ type: TEST_FOLLOW_FAIL });
    }
}

function* follow(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', FOLLOW, params);
        if (response.status === 200) {
            action.callBack(null, 'success');
            yield put({ type: FOLLOW_SUCCESS, data: response.data });
        } else {
            action.callBack('error', null);
            yield put({ type: FOLLOW_FAIL });
        }
    } catch (err) {
        action.callBack('error', null);
        yield put({ type: FOLLOW_FAIL });
    }
}




export function* watchProfileDetails() {
    yield takeEvery(PROFILE_DETAILS_START, profileDetails);
}

export function* watchGetUsers() {
    yield takeEvery(USERS_START, getUsers);
}

export function* watchGetNotFollowedUsers() {
    yield takeEvery(NOT_FOLLOWED_USERS_START, getNotFollowedUsers);
}

export function* watchTestFollow() {
    yield takeEvery(TEST_FOLLOW_START, testFollow);
}

export function* watchFollow() {
    yield takeEvery(FOLLOW_START, follow);
}