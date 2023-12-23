import {combineReducers} from "@reduxjs/toolkit";
import auth from "./auth";
import message from "./message";
import size from "./Funcionality/sizeSlice";
import reservation from "./Funcionality/reservationSlice";
import cars from "./Funcionality/carsSlice";
import adds from "./Funcionality/addsSlice";


export default combineReducers({
    auth, message, size, reservation, cars, adds
})