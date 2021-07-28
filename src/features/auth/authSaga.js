import { call, put, takeLatest } from "redux-saga/effects";
import API from "./authApi";
import { getUserInfoRequest, getUserInfoSuccess, login, loginSuccess, register, registerSuccess } from "./authSlice";

function* handleLoginSaga(action) {
    try {
        // cal api
        const res = yield call(API.login, action.payload)
        if(res)
        yield put(loginSuccess(res.user))
    
    } catch (error) {
        console.log(error);
    }
}
// function* handleSigninSaga() {
//     try {S
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
        if(res)
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