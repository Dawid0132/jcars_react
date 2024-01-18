import axios from 'axios';

const url = `${process.env.REACT_APP_API_HOST}/api/jcars`;



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