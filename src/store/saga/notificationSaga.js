import { put, takeEvery, call } from 'redux-saga/effects';
import {
    DELETE_NOTIFICATIONS_FAIL, DELETE_NOTIFICATIONS_START,
    DELETE_NOTIFICATIONS_SUCCESS, NOTIFICATIONS_FAIL, NOTIFICATIONS_START,
    NOTIFICATIONS_SUCCESS, READ_NOTIFICATIONS_FAIL,
    READ_NOTIFICATIONS_START, READ_NOTIFICATIONS_SUCCESS
} from 'store/actions';
import Fetch from '../../network';
import { DELETE_NOTIFICATION, GET_NOTIFICATION, READ_NOTIFICATION, } from '../constant';

function* getNotifcations(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_NOTIFICATION, params);
        if (response.status === 200) {
            yield put({ type: NOTIFICATIONS_SUCCESS, data: response.data });
        } else {
            yield put({ type: NOTIFICATIONS_FAIL });
        }
    } catch (err) {
        yield put({ type: NOTIFICATIONS_FAIL });
    }
}


function* readNotification(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', READ_NOTIFICATION, params);
        if (response.status === 200) {
            yield put({ type: READ_NOTIFICATIONS_SUCCESS, data: response.data });
        } else {
            action.callback({ message: response.message }, null);
            yield put({ type: READ_NOTIFICATIONS_FAIL });
        }
    } catch (err) {
        yield put({ type: READ_NOTIFICATIONS_FAIL });
    }
}


function* deleteNotifcation(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', DELETE_NOTIFICATION, params);
        if (response.status === 200) {
            action.callBack(response.data);
            yield put({ type: DELETE_NOTIFICATIONS_SUCCESS, data: response.data });
        } else {
            yield put({ type: DELETE_NOTIFICATIONS_FAIL });
        }
    } catch (err) {
        yield put({ type: DELETE_NOTIFICATIONS_FAIL });
    }
}

export function* watchGetNotifications() {
    yield takeEvery(NOTIFICATIONS_START, getNotifcations);
}

export function* watchReadNotification() {
    yield takeEvery(READ_NOTIFICATIONS_START, readNotification);
}

export function* watchDeleteNotifcation() {
    yield takeEvery(DELETE_NOTIFICATIONS_START, deleteNotifcation);
}

