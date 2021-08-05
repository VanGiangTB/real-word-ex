import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "./homeApi";
import { getGlobalFeed, getTags, getYourFeed, globalFeedSuccess, tagsSuccess, yourFeedSuccess,createPost, getTitlePostSuccess, getTitlePost, getCommentPostSuccess, getCommentPost, getDetail, getUserPostSuccess, deleteUserPostSuccess, deleteUserPost } from "./homeSlice";

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
        yield put (yourFeedSuccess(res))
    } catch (error) {
        console.log(error);
    }
}
function* handleGetGlobalFeed(actions){
    try {
        // call api 
        const res = yield call(API.globalFeed, actions.payload)
        yield put(globalFeedSuccess(res)) 
    } catch (error) {
        console.log(error);
        // yield put(globalFeedFailed(error))
    }
}
function* handleCreatePost(actions){
    try {
        yield call(API.createPost, actions.payload)

    } catch (error) {
        console.log(error);
    }
}
function* handleGetTitlePost(payload){
    try {
        const res = yield call(API.getTitlePost, payload)
        yield put(getTitlePostSuccess(res.article))
    } catch (error) {
        console.log(error);
    }
}
function* handleGetCommentPost(payload){
    try {
        const res = yield call(API.getCommentPost,payload)
        yield put(getCommentPostSuccess(res.comments))
    } catch (error) {
        console.log(error);
    }
}
function* handleGetUserPost(payload){
    try {
        const res = yield call(API.getUserPost,payload)
        yield put(getUserPostSuccess(res.user))
    } catch (error) {
        console.log(error);
    }
}

function* handleGetDetail(action) {
    yield all([
        call(handleGetTitlePost, action.payload),
        call(handleGetCommentPost, action.payload),
        call(handleGetUserPost,action.payload)
    ])
}
function* handleDeleteUserPost(action){
    try {
        const res = yield call(API.deleteUserPost,action.payload)
        yield put(deleteUserPostSuccess(res))
    } catch (error) {
        console.log(error);
    }
}

export default function* homeSaga() {
    yield takeLatest(getTags().type, handleGetTags)
    yield takeLatest(getYourFeed.toString(), handleGetYourFeed)
    yield takeLatest(getGlobalFeed.toString(),handleGetGlobalFeed)
    yield takeLatest(createPost.toString(),handleCreatePost)
    // yield takeLatest(getTitlePost.toString(),handleGetTitlePost)
    // yield takeLatest(getCommentPost.toString(),handleGetCommentPost)
    yield takeLatest(getDetail().type, handleGetDetail)
    yield takeLatest(deleteUserPost.toString(),handleDeleteUserPost)
}