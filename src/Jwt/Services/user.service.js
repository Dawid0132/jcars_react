import axios from "axios";
import authHeader from "./auth.header";

const API_URL = `${process.env.REACT_APP_API_HOST}/api/test/`;

const getPublicContent = () => {
    return axios.get(API_URL + "all");
}

const getUserBoard = () => {
    return axios.get(API_URL + "user", {headers: authHeader()})
}

export default {
    getUserBoard,
    getPublicContent
}