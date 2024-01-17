import axios from "axios";

const API_URL = "http://jauto.pl:8080/api/jcars/reservations";


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