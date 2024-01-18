import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_HOST}/api/auth/`;

const register = (firstname, lastname, email, password, phone, address, hasDrivingLicense) => {
    return axios.post(API_URL + "signup", {
        firstname, lastname, email, password, phone, address, hasDrivingLicense
    })
}

const login = (email, password) => {
    return axios.post(API_URL + "signin", {
        email, password
    }).then((response) => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    })
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
}

export default {
    register, logout, login
}