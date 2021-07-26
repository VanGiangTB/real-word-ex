import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tags: null,
    yourFeed: null,
    globalFeed: null,
    error: null
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
            state.yourFeed = actions.payload
        },
        getGlobalFeed(){

        },
        globalFeedSuccess(state,actions){
            state.globalFeed = actions.payload
        },
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
    globalFeedFailed
    } = homeSlice.actions
export default homeSlice.reducer