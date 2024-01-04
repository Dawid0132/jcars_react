import './App.css';
import Navbar_component from "./Components/HomePage/Navbar/Navbar_component"
import {Outlet, Redirect, redirect, useLocation} from "react-router-dom";
import Footer_component from "./Components/HomePage/Footer/Footer_component";
import {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./Jwt/Actions/auth";
import EventBus from "./Jwt/Common/EventBus";
import {Navigate} from "react-router";
import {clearMessage} from "./Jwt/Actions/message";


function App() {

    const dispatch = useDispatch();
    const {user: currentUser} = useSelector((state) => state.auth);
    let location = useLocation();



    useEffect(() => {
        if (["/login"].includes(location.pathname)) {
            dispatch(clearMessage());
        }
    }, [dispatch, location])


    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch])


    useEffect(() => {
        EventBus.on("logout", () => {
            logOut();
        })

        return () => {
            EventBus.remove("logout")
        }
    }, [logOut])


    return (<>
        <Navbar_component
            currentUser={currentUser}
            onClick={logOut}/>
        <Outlet/>
        <Footer_component/>
    </>);
}

export default App;
