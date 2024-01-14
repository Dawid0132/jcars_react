import reservationServices from "../Services/reservation.services";
import {ADD_RESERVATION, REGISTER_FAIL, SET_MESSAGE} from "./Type";

export const reservation = (reservation,adds) => (dispatch) => {
    return reservationServices(reservation,adds).then((response) => {
        dispatch({
            type: ADD_RESERVATION,
            payload: {reservation: response.data}
        })
        return Promise.resolve();
    }, (error) => {
        const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())

        dispatch({
            type: SET_MESSAGE,
            payload: message
        })

    })
}