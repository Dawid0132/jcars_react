import axios from 'axios';

const url = "http://localhost:8080/jcars"



export const getCars = () => {
    axios.get(`${url}/cars`).then((resp) => {
        return resp.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })
}


export const getCar = (id) => {
    axios.get(`${url}/cars/${id}`)
        .then((resp) => {
            return resp.data;
        }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })
}