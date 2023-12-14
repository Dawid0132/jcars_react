import {configureStore} from "@reduxjs/toolkit";
import sizeReducer from './features/sizeSlice';
import addsReducer from "./features/addsSlice";
import carReducer from "./features/carsSlice";
import reservationReducer from "./features/reservationSlice";

export default configureStore({
    reducer: {
        size: sizeReducer,
        adds: addsReducer,
        cars: carReducer,
        reservation: reservationReducer
    }
})