import {useEffect, useState} from "react";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import * as yup from "yup";
import {Formik} from "formik";
import Loading from "../Loading";
import {editDataUser, editPasswordUser} from "../../Jwt/Services/editProfile.services";

const EditProfile = () => {

    const [loading, setLoading] = useState(false);


    const [changePassword, setChangePassword] = useState(false);
    const [changeAddress, setChangeAddress] = useState(false);
    const [changePhone, setChangePhone] = useState(false);

    const {user: currentUser} = useSelector((state) => state.auth);

    const editProfileSchema = yup.object().shape({
        phone: yup.string(), address: yup.string(), oldPassword: yup.string(), newPassword: yup.string()
    });


    if (loading) {
        return <Loading/>
    }


    return (<Container className={"text-white mt-3"}>
        <h1>Hello, {currentUser.firstname}</h1>
        <Formik validationSchema={editProfileSchema}
                initialValues={{phone: '', address: '', oldPassword: '', newPassword: ''}}
                onSubmit={(values, actions) => {
                    setLoading(true);
                    setTimeout(() => {
                        console.log(values);
                        if (values.phone !== '' || values.address !== '') {
                            editDataUser(values.address, values.phone).then((response) => {
                                alert(response.data);
                                return Promise.resolve();
                            }, (error) => {
                                return Promise.reject();
                            })
                        } else {
                            if (values.oldPassword !== '' && values.newPassword !== '') {
                                try {
                                    editPasswordUser(values.oldPassword, values.newPassword).then((response) => {
                                        console.log(response);
                                        return Promise.resolve();
                                    }, (error) => {
                                        console.log(error);
                                        return Promise.reject();
                                    })
                                } catch (e) {

                                }
                            } else {
                                actions.setErrors({
                                    oldPassword: "is Required",
                                    newPassword: "is Required"
                                })
                            }
                        }

                        actions.resetForm({
                            values: {
                                phone: '', address: '', oldPassword: '', newPassword: ''
                            }
                        })
                        setLoading(false);
                    }, 400);
                }}>{({handleSubmit, handleChange, values, touched, errors}) => (<Form onSubmit={handleSubmit}>
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
                        {!currentUser.verified.passwordIsChanged && <Button onClick={() => {
                            values.oldPassword = '';
                            values.newPassword = '';
                            values.address = '';
                            values.phone = '';
                            setChangePassword(!changePassword)
                        }} className={"border-0 p-0 bg-dark ms-2"}>
                            <Image src={"/pencil-fill.svg"}/>
                        </Button>}
                    </div>
                    {changePassword &&
                        <Form.Control name={"oldPassword"} onChange={handleChange} value={values.oldPassword}
                                      placeholder={"enter your current password"} className={"w-50"}/>}
                    {changePassword &&
                        <Form.Control name={"newPassword"} onChange={handleChange} value={values.newPassword}
                                      placeholder={"enter your new password"} className={"w-50 mt-3"}/>}
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col>
                    <div className={"d-flex flex-row align-items-start"}>
                        <div className={"h5 h-100"}>Address:
                            <span className={"ms-3"}>{currentUser.address ? currentUser.address : "Not added"}</span>
                        </div>
                        {!currentUser.verified.addressIsChanged && !changePassword && <Button onClick={() => {
                            setChangeAddress(!changeAddress)
                        }} className={"border-0 p-0 bg-dark ms-2"}>
                            <Image src={"/pencil-fill.svg"}/>
                        </Button>}
                    </div>
                    {changeAddress && !changePassword &&
                        <Form.Control name={"address"} onChange={handleChange} value={values.address}
                                      placeholder={"enter your address"}
                                      className={"w-50"}/>}
                </Col>
                <Col>
                    <div className={"d-flex flex-row align-items-start"}>
                        <div className={"h5 h-100"}>Phone:
                            <span className={"ms-3"}>{currentUser.phone ? currentUser.phone : "Not added"}</span>
                        </div>
                        {!currentUser.verified.phoneIsChanged && !changePassword && <Button onClick={() => {
                            setChangePhone(!changePhone);
                        }} className={"border-0 p-0 bg-dark ms-2"}>
                            <Image src={"/pencil-fill.svg"}/>
                        </Button>}
                    </div>
                    {changePhone && !changePassword &&
                        <Form.Control name={"phone"} onChange={handleChange} value={values.phone}
                                      placeholder={"enter your phone number"}
                                      className={"w-50"}/>}
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col>
                    <div className={"text-danger"}>* is not Added</div>
                    <div className={"h5"}>Car License</div>
                    <Form.Control placeholder={"enter your car license id"} className={"w-50"}/>
                </Col>
            </Row>
            <div className={"d-flex flex-row justify-content-end"}>
                <Button variant={"outline-warning"} className={"mt-3 w-25"} type={"submit"}>Submit</Button>
            </div>
        </Form>)}
        </Formik>
    </Container>)
}

export default EditProfile;