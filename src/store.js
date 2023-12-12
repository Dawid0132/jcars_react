import {configureStore} from "@reduxjs/toolkit";
import sizeReducer from './features/sizeSlice';
import addsReducer from "./features/addsSlice";
import carReducer from "./features/carsSlice";

export default configureStore({
    reducer: {
        size: sizeReducer,
        adds: addsReducer,
        cars: carReducer
    }
})