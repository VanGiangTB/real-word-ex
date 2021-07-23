import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tags: null,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getTags() {

        },
        tagsSuccess(state,actions) {
            state.tags = actions.payload
        }
    },
})

export const {getTags, tagsSuccess} = homeSlice.actions
export default homeSlice.reducer