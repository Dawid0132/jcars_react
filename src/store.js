import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import rootReducer from "./Jwt/Reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
