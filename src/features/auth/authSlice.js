import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userInfo: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, actions) {
        },
        loginSuccess(state, actions) {
            // debugger
            // console.log("redux", actions.payload);
            state.user = actions.payload
            localStorage.setItem('jwt', actions.payload.token)
            localStorage.setItem('username', actions.payload.username)
        },
        // signin(state,actions){
            
        // },
        // signinSuccess(state,actions){
        //     state.user = actions.payload
        // },
        register(state, actions) {
        },
        registerSuccess(state, actions) {
            state.user = actions.payload
            localStorage.setItem('jwt', actions.payload.token)
            localStorage.setItem('username', actions.payload.username)
        },
        // signup(state,actions){

        // },
        // signupSuccess(state,actions){
        //     state.user = actions.payload
        // },
        getUserInfoRequest() {},
        getUserInfoSuccess(state, actions) {
            state.userInfo = actions.payload
        },

     }
})

export const { login, register, registerSuccess, loginSuccess, getUserInfoSuccess, getUserInfoRequest } = authSlice.actions
export default authSlice.reducer