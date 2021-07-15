import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
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
            localStorage.set('token', actions.payload.token)
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
        },
        // signup(state,actions){

        // },
        // signupSuccess(state,actions){
        //     state.user = actions.payload
        // },


     }
})

export const { login, register, registerSuccess, loginSuccess } = authSlice.actions
export default authSlice.reducer