import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Formik, useFormik} from "formik";
import * as yup from 'yup';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {register} from "../../Jwt/Actions/auth";

const SignUp = () => {

    const [successfully, setSuccessfully] = useState(false);

    const dispatch = useDispatch();

    const signupSchema = yup.object().shape({
        firstname: yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long')
            .required('Required'),
        lastname: yup.string()
            .min(2, 'Too short')
            .max(50, 'Too long')
            .required('Required'),
        email: yup.string()
            .email('Invalid email')
            .required('Required'),
        password: yup.string()
            .min(8, 'Password is too short')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must have minimum 8 characters at least one letter,one number and one special character")
            .required('Required'),
        carlicense: yup.string()
            .required('Required'),
    });


    return (<Container className={"w-50 text-white"}>
        <h1>Signup</h1>
        <Formik
            validationSchema={signupSchema}
            initialValues={{
                firstname: '', lastname: '', email: '', password: '', phone: '', address: '', carlicense: ''
            }} onSubmit={(values) => {
            setTimeout(() => {
                dispatch(register(values))
                    .then(() => {
                        setSuccessfully(true)
                    })
                    .catch(() => {
                        setSuccessfully(false)
                    })
            }, 400);
        }}>{({handleSubmit, handleChange, values, touched, errors}) => (<Form onSubmit={handleSubmit}>
            <Row>
                <Col xl={6} md={6} lg={6} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>Firstname <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control name={"firstname"} onChange={handleChange}
                                      value={values.firstname}
                                      placeholder={"Enter your firstname"}
                                      isValid={touched.firstname && !errors.firstname}
                                      isInvalid={!!errors.firstname}
                        />
                        <Form.Control.Feedback type={"invalid"}>{errors.firstname}</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col xl={6} md={6} lg={6} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>Lastname <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control name={"lastname"} onChange={handleChange}
                                      value={values.lastname}
                                      placeholder={"Enter your lastname"}
                                      isValid={touched.lastname && !errors.lastname}
                                      isInvalid={!!errors.lastname}
                        />
                        <Form.Control.Feedback type={"invalid"}>{errors.lastname}</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={"mt-2"}>
                <Col xl={6} md={6} lg={6} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>Email <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control name={"email"} onChange={handleChange} value={values.email}
                                      placeholder={"Enter your email"}
                                      isValid={touched.email && !errors.email}
                                      isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type={"invalid"}>{errors.email}</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Password <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control name={"password"} onChange={handleChange}
                                      value={values.password}
                                      placeholder={"Enter your password"}
                                      isValid={touched.password && !errors.password}
                                      isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type={"invalid"}>{errors.password}</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Col className={"mt-2"}>
                <Form.Group>
                    <Form.Label>Phone(optional)</Form.Label>
                    <Form.Control name={"phone"} onChange={handleChange} value={values.phone}
                                  placeholder={"Enter your phone number"}/>
                </Form.Group>
            </Col>
            <Col className={"mt-2"}>
                <Form.Group>
                    <Form.Label>Address(optional)</Form.Label>
                    <Form.Control name={"address"} onChange={handleChange} value={values.address}
                                  placeholder={"Enter your address"}/>
                </Form.Group>
            </Col>
            <Col className={"mt-2"} xl={6} lg={6} md={6}>
                <Form.Group>
                    <Form.Label>Car-license <span className={"text-danger"}>*</span></Form.Label>
                    <Form.Select name={"carlicense"} onChange={handleChange}
                                 value={values.carlicense}
                                 isValid={touched.carlicense && !errors.carlicense}
                                 isInvalid={!!errors.carlicense}
                    >
                        <option disabled={true}>Do you have car-license?</option>
                        <option value={"true"}>Yes</option>
                        <option value={"false"}>No</option>
                    </Form.Select>
                    <Form.Control.Feedback type={"invalid"}>{errors.carlicense}</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Button variant={"outline-warning"} className={"w-100 mt-3"} type={"submit"}>Create account</Button>
        </Form>)}
        </Formik>
    </Container>)
}

export default SignUp;