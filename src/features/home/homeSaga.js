import { call, put, takeLatest } from "redux-saga/effects";
import API from "./homeApi"
import { tagsSuccess,yourFeedSuccess,globalFeedSuccess, globalFeedFailed } from "./homeSlice";
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
function* handleGetYourFeed(actions) {
    try {
        // call api 
        const res = yield call(API.yourFeed, actions.payload)
        yield put (yourFeedSuccess(res.yourFeed))
    } catch (error) {
        console.log(error);
    }
}
function* handleGetGlobalFeed(actions){
    try {
        // call api 
        const res = yield call(API.globalFeed, actions.payload)
        yield put(globalFeedSuccess(res.globalFeed)) 
    } catch (error) {
        console.log(error);
        yield put(globalFeedFailed(error))
    }
}

export default function* homeSaga() {
    yield takeLatest(getTags().type, handleGetTags)
    yield takeLatest(getYourFeed.toString(), handleGetYourFeed)
    yield takeLatest(getGlobalFeed.toString(),handleGetGlobalFeed)
}