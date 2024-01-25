import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import NavLinkCars from "./NavLinkCars";

const DisplayAllCars = () => {

    return (<Container className={"text-white pt-16"}>
        <NavLinkCars/>
        <Outlet/>
    </Container>)
}

export default DisplayAllCars;