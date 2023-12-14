import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";

const Login = () => {
    return (
        <Container className={"bg-gradient pt-5 pb-5"}>
            <Outlet/>
        </Container>
    )
}

export default Login;