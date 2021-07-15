import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { login, register, registerSuccess, loginSuccess } from "./authSlice";
import API from "./authApi"

function* handleLoginSaga(action) {
    try {
        // cal api
        const res = yield call(API.login, action.payload)
        yield put(loginSuccess(res.user))
    
    } catch (error) {
        console.log(error);
    }
}
function* handleRegisterSaga(action) {
    try {
        // cal api
        const res = yield call(API.register, action.payload)
        yield put(registerSuccess(res.user))
    } catch (error) {
        console.log(error);
    }
}

export default function* authSaga() {
    
    yield takeLatest(login.toString(), handleLoginSaga)
    yield takeLatest(register.toString(), handleRegisterSaga)
}