import { call, put, takeLatest } from "redux-saga/effects";
import { login, register } from "./authSlice";
import API from "./authApi"

function* handleLoginSaga(action) {
    // cal api
    const res = yield call(API.login, action.payload)
    yield put(login(res.user))
}
function* handleRegisterSaga(action) {
    // cal api
    const res = yield call(API.register, action.payload)
    yield put(register(res.user))
}

export default function* authSaga() {
    yield takeLatest(login.toString(), handleLoginSaga)
    yield takeLatest(register.toString(), handleRegisterSaga)
}