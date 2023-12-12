import axios from "axios";

const url = "http://localhost:8080"

export const getLimits = () => {
    axios.get(`${url}/getlimits`).then((resp) => {
        return resp.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })
}