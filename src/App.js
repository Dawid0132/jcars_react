import './App.css';
import Navbar_component from "./Components/HomePage/Navbar/Navbar_component"
import Homepage from "./Components/HomePage/Homepage";
import {Outlet} from "react-router-dom";
import Footer_component from "./Components/HomePage/Footer/Footer_component";


function App() {
    return (<>
        <Navbar_component/>
        <Outlet/>
        <Footer_component/>
    </>);
}

export default App;
