import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useState} from "react";
import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const Profile = () => {

    const [editProfile, setEditProfile] = useState(false);

    const {user: currentUser} = useSelector((state) => state.auth);

    const {isLoggedIn} = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to={"/"}/>
    }


    if (!editProfile) {
        return (<Container className={"text-white mt-3"}>
            <div className={"d-flex flex-row justify-content-between"}>
                <h1>Hello, {currentUser.firstname}</h1>
                <Button onClick={() => {
                    setEditProfile(true)
                }} variant={"outline-warning"}>Edit profile</Button>
            </div>
            <Row className={"mt-5"}>
                <Col className={"d-flex flex-row align-items-center"}>
                    <div className={"h5"}>Firstname:
                        <span className={"ms-3"}>{currentUser.firstname}</span>
                    </div>
                </Col>
                <Col className={"d-flex flex-row align-items-center"}>
                    <div className={"h5"}>Lastname:
                        <span className={"ms-3"}>{currentUser.lastname}</span>
                    </div>
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col>
                    <div className={"text-danger"}>* is not Verified</div>
                    <div className={"h5"}>Email:
                        <span className={"ms-3"}>{currentUser.email}</span>
                    </div>
                </Col>
                <Col>
                    <div className={"d-flex flex-row align-items-start"}>
                        <div className={"h5 h-100"}>Password:
                            <span className={"ms-3"}>*********</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col>
                    <div className={"d-flex flex-row align-items-start"}>
                        <div className={"h5 h-100"}>Address:
                            <span className={"ms-3"}>{currentUser.address ? currentUser.address : "Not added"}</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"d-flex flex-row align-items-start"}>
                        <div className={"h5 h-100"}>Phone:
                            <span className={"ms-3"}>{currentUser.phone ? currentUser.phone : "Not added"}</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col>
                    <div className={"text-danger"}>* is not Added</div>
                    <div className={"h5"}>Car License</div>
                </Col>
            </Row>
        </Container>)
    } else {
        return (
            <EditProfile/>
        )
    }
}

export default Profile;