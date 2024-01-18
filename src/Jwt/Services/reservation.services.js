import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_HOST}/reservations`;


const reservation = (reservation, adds) => {
    return axios.post(API_URL, {
        reservation, adds
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export default reservation;