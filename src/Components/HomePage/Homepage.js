import Header_component from "./Header/Header_component";
import Body_component from "./Body/Body_component";
import Hero from "./hero.js";
import Features from "./features.js";
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {add} from "../../Jwt/Reducers/Funcionality/carsSlice";
import {ADD_CARS} from "../../Jwt/Actions/Type";
import {addCars} from "../../Jwt/Reducers/Funcionality/Actions/Actions";
import Loading from "../Loading";
import Newsletter from "./Newsletter.js";
import CarList from "./CarList.js";

const url = `${process.env.REACT_APP_API_HOST}/cars`;

const Homepage = () => {

    const cars = useLoaderData().res;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

   /* useEffect(() => {
        dispatch(addCars(cars));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [cars, dispatch])*/


   /* if (isLoading) {
        return <Loading/>
    }*/

       /* <Header_component/>
               <Body_component/>
        */

    return (<>
        <Hero/>
        <Features/>
        <CarList/>
        <Newsletter/>

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