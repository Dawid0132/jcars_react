import Header_component from "./Header/Header_component";
import Body_component from "./Body/Body_component";
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {add} from "../../Jwt/Reducers/Funcionality/carsSlice";
import {ADD_CARS} from "../../Jwt/Actions/Type";
import {addCars} from "../../Jwt/Reducers/Funcionality/Actions/Actions";
import Loading from "../Loading";


const url = "http://localhost:8080/api/jcars/cars";

const Homepage = () => {

    const cars = useLoaderData().res;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(addCars(cars));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [cars, dispatch])


    if (isLoading) {
        return <Loading/>
    }

    return (<>
        <Header_component/>
        <Body_component/>
    </>)
}

export const loader = async () => {
    const res = await axios.get(url)
        .then((resp) => {
            return resp.data;
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    return {res}
}

export default Homepage;