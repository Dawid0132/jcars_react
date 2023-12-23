import './App.css';
import Navbar_component from "./Components/HomePage/Navbar/Navbar_component"
import Homepage from "./Components/HomePage/Homepage";
import {Outlet} from "react-router-dom";
import Footer_component from "./Components/HomePage/Footer/Footer_component";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout} from "./Jwt/Actions/auth";
import EventBus from "./Jwt/Common/EventBus";


function App() {

    const dispatch = useDispatch();

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
        <Navbar_component onClick={logOut}/>
        <Outlet/>
        <Footer_component/>
    </>);
}

export default App;
