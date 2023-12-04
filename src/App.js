import './App.css';
import Navbar_component from "./Components/HomePage/Navbar/Navbar_component";
import Header_component from "./Components/HomePage/Header/Header_component";
import Body_component from "./Components/HomePage/Body/Body_component";
import Footer_component from "./Components/HomePage/Footer/Footer_component";


function App() {
    return (
        <>
            <Navbar_component/>
            <Header_component/>
            <Body_component/>
            <hr className={"mt-5 mb-5"} style={{
                color: "white"
            }}/>
            <Footer_component/>
            <hr className={""} style={{
                color: "white"
            }}/>
            <div className={"text-white p-3"}>© 2023 Wszelkie prawa zastrzeżone. Projekt i wykonanie JCars</div>
        </>
    );
}

export default App;
