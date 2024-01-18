import {applyMiddleware, compose, createStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import rootReducer from "./Jwt/Reducers/index";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
)

export default store;
