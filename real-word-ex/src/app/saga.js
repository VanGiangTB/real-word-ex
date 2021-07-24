// import { isAllOf } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects"
import authSaga from "../features/auth/authSaga";
import homeSaga from "../features/home/homeSaga";

export default function* rootSaga() {
    console.log("root saga");
    yield all([authSaga(), homeSaga()])  
}