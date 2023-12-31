import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/api/jcars";

const currentUser = JSON.parse(localStorage.getItem('user'))

export const editDataUser = (address, phone) => {
    return axios.put(`${API_URL}/users/${currentUser.id}`, {
        address: address, phone: phone
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const editPasswordUser = (oldPassword, newPassword) => {
    return axios.put(`${API_URL}/users/pass/${currentUser.id}`, {
        oldPassword: oldPassword, newPassword: newPassword
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}