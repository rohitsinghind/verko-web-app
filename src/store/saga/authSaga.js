import { put, takeEvery, call } from 'redux-saga/effects';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_START } from 'store/actions';
import Fetch from '../../network';
import { LOGIN_PASSWORD } from '../constant';

function* login(action) {
    try {
        const params = action.params;
        const response = yield call(new Fetch().fetchRequest, 'POST', LOGIN_PASSWORD, params);
        if (response.status === 200) {
            action.callback(null, response.data);
            yield put({ type: LOGIN_SUCCESS });
        } else {
            action.callback({ message: response.message }, null);
            yield put({ type: LOGIN_FAIL });
        }
    } catch (err) {
        action.callback(err, null);
        yield put({ type: LOGIN_FAIL });
    }
}


export function* watchLogin() {
    yield takeEvery(LOGIN_START, login);
}