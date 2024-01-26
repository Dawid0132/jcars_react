import './App.css';
import Navbar_component from "./Components/HomePage/Navbar/Navbar_component"
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Components/HomePage/footer";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./Jwt/Actions/auth";
import EventBus from "./Jwt/Common/EventBus";
import {clearMessage} from "./Jwt/Actions/message";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
       <div>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </div>
        <Navbar_component
            currentUser={currentUser}
            onClick={logOut}/>
        <Outlet/>
        <Footer/>
    </>);
}

export default App;
