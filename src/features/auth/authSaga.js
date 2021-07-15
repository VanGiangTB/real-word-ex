import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { login,register, registerSuccess, loginSuccess, getUserInfoRequest, getUserInfoSuccess} from "./authSlice";
import API from "./authApi"

function* handleLoginSaga(action) {
    try {
        // cal api
        const res = yield call(API.login, action.payload)
        console.log('1',res);
        yield put(loginSuccess(res.user))
    
    } catch (error) {
        console.log(error);
    }
}
// function* handleSigninSaga() {
//     try {
//         const res = yield call(API.signin)
//         yield call(signinSuccess(res.user))
//     } catch (error) {
//         console.log(error);
//     }
// }

function* handleRegisterSaga(action) {
    try {
        // cal api
        const res = yield call(API.register, action.payload)
        yield put(registerSuccess(res.user))
    } catch (error) {
        console.log(error);
    }
}
function* handleGetuserInfoSaga(action) {
    try {
        const res = yield call(API.getUserInfo, action.payload)
        //dispatch action
        yield put(getUserInfoSuccess(res.profile))
    } catch (error) {
        console.log(error);
    }
}

export default function* authSaga() {
    
    yield takeLatest(login.toString(), handleLoginSaga)
    yield takeLatest(register.toString(), handleRegisterSaga)
    yield takeLatest(getUserInfoRequest.toString(), handleGetuserInfoSaga)
    // yield takeLatest(signup.toString(), handleSignupSaga)
}