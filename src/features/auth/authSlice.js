import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userInfo: null,
    isAuth: false,
    isMiss: false
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
            state.isMiss = true
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
            state.isAuth = true
        },
        resetState(state,actions){
            state.isAuth = false
            state.isMiss = false
        },
       
        getUserInfoRequest() {},
        getUserInfoSuccess(state, actions) {
            state.userInfo = actions.payload
        },
        // getUserInfoFalse(state,actions){
        //     state.isMiss = false
        // }

        logout(state) {
            state.userInfo = null
            localStorage.removeItem("jwt");
        },
        putUserInfo(){}


     }
})

export const { login, register, registerSuccess, loginSuccess, getUserInfoSuccess, getUserInfoRequest,resetState,getUserInfoFalse, logout,putUserInfo } = authSlice.actions
export default authSlice.reducer