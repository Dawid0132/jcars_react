import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";

const Login = () => {
    return (
        <Container className={"bg-gray-900 pt-16"}>
            <Outlet/>
        </Container>
    )
}

export default Login;