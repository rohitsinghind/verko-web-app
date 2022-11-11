import { put, takeEvery, call } from 'redux-saga/effects';
import { CHATS_START, MESSAGES_START, CHATS_SUCCESS, CHATS_FAIL, MESSAGES_SUCCESS, MESSAGES_FAIL, CHATS_CLEAR, MESSAGES_CLEAR, CHATS_CLEAR_SUCCESS, MESSAGES_CLEAR_SUCCESS } from 'store/actions';
import Fetch from '../../network';
import { GET_CHATS, GET_MESSAGESS } from '../constant';

function* getChats(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_CHATS, params);
        if (response.status === 200) {
            yield put({ type: CHATS_SUCCESS, data: response.data });
        } else {
            yield put({ type: CHATS_FAIL });
        }
    } catch (err) {
        yield put({ type: CHATS_FAIL });
    }
}

function* getMessages(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'GET', GET_MESSAGESS, params);
        if (response.status === 200) {
            yield put({ type: MESSAGES_SUCCESS, data: response.data });
        } else {
            yield put({ type: MESSAGES_FAIL });
        }
    } catch (err) {
        yield put({ type: MESSAGES_FAIL });
    }
}

function* clearAllChats() {
    yield put({ type: CHATS_CLEAR_SUCCESS })
}

function* clearAllMessages() {
    yield put({ type: MESSAGES_CLEAR_SUCCESS })
}

export function* watchGetChats() {
    yield takeEvery(CHATS_START, getChats);
}

export function* watchGetMessages() {
    yield takeEvery(MESSAGES_START, getMessages);
}

export function* watchClearChats() {
    yield takeEvery(CHATS_CLEAR, clearAllChats);
}

export function* watchClearMessages() {
    yield takeEvery(MESSAGES_CLEAR, clearAllMessages);
}
