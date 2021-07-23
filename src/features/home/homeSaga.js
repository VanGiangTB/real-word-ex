import { call, put, takeLatest } from "redux-saga/effects";
import API from "./homeApi"
import { tagsSuccess,yourFeedSuccess,globalFeedSuccess } from "./homeSlice";
import { getTags,getYourFeed,getGlobalFeed } from "./homeSlice"

function* handleGetTags() {
    try {
        // call api 
        const res = yield call(API.tags)
        yield put(tagsSuccess(res.tags))

    } catch (error) {
        console.log(error);
    }
}
function* handleGetYourFeed() {
    try {
        // call api 
        const res = yield call(API.yourFeed)
        yield put (yourFeedSuccess(res.yourFeed))
    } catch (error) {
        console.log(error);
    }
}
function* handleGetGlobalFeed(){
    try {
        // call api 
        const res = yield call(API.globalFeed)
        yield put(globalFeedSuccess(res.globalFeed)) 
    } catch (error) {
        console.log(error);
    }
}

export default function* homeSaga() {
    yield takeLatest(getTags().type, handleGetTags)
    yield takeLatest(getYourFeed().type, handleGetYourFeed)
    yield takeLatest(getGlobalFeed().type,handleGetGlobalFeed)
}