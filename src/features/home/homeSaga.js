import { call, put, takeLatest } from "redux-saga/effects";
import API from "./homeApi"
import { tagsSuccess } from "./homeSlice";
import { getTags } from "./homeSlice"

function* handleGetTags() {
    try {
        // call api 
        const res = yield call(API.tags)
        yield put(tagsSuccess(res.tags))

    } catch (error) {
        console.log(error);
    }
}

export default function* homeSaga() {
    yield takeLatest(getTags().type, handleGetTags)
}