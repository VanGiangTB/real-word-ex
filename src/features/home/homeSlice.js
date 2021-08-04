import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tags: null,
    yourFeed: null,
    globalFeed: null,
    error: null,
    totalFeed: 0,
    titlePost:null,
    commentPost:null,
    user:null,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getTags() {

        },
        tagsSuccess(state,actions) {
            state.tags = actions.payload
        },
        getYourFeed() {
            
        },
        yourFeedSuccess(state,actions){
            state.yourFeed = actions.payload.articles
            state.totalFeed = actions.payload.articlesCount
        },
        getGlobalFeed(){

        },
        globalFeedSuccess(state,actions){
            state.globalFeed = actions.payload.articles
            state.totalFeed = actions.payload.articlesCount
        },
        createPost(){

        },
        getTitlePost(){

        },
        getTitlePostSuccess(state,actions){
            state.titlePost = actions.payload
        },
        getCommentPost(){

        },
        getCommentPostSuccess(state,actions){
            state.commentPost= actions.payload
        },
        getUserPost(){},
        getUserPostSuccess(state,action){
            state.user = action.payload
        },
        getDetail(state, action) {}

        // globalFeedFailed(state,actions){
        //     state.error = actions.payload
        // }
    },
})

export const {
    getTags,
    tagsSuccess,
    getYourFeed,
    yourFeedSuccess,
    getGlobalFeed,
    globalFeedSuccess,
    globalFeedFailed,
    createPost,
    getTitlePost,
    getTitlePostSuccess,
    getCommentPost,
    getCommentPostSuccess,
    getDetail,
    getUserPost,
    getUserPostSuccess,
    } = homeSlice.actions
export default homeSlice.reducer