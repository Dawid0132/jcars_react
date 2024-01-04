import {Spinner} from "react-bootstrap";

const Loading = () => {
    return (
        <div className={"text-white d-flex flex-column justify-content-center align-items-center text-center h-100"}>
            <Spinner animation="border" role="status"/>
            <div>Loading...</div>
        </div>
    )
}


export default Loading;