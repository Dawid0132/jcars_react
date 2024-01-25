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
        firstName: yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long')
            .required('Required'),
        lastName: yup.string()
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
        hasDrivingLicense: yup.string()
            .required('Required'),
    });


    return (<Container className={"w-50 text-white mt-16"}>
        <h1>Stwórz konto</h1>
        <Formik
            validationSchema={signupSchema}
            initialValues={{
                firstName: '', lastName: '', email: '', password: '', phone: '', address: '', hasDrivingLicense: ''
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
                        <Form.Label>Imię <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control name={"firstName"} onChange={handleChange}
                                      value={values.firstName}
                                      placeholder={"Enter your firstName"}
                                      isValid={touched.firstName && !errors.firstName}
                                      isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type={"invalid"}>{errors.firstName}</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col xl={6} md={6} lg={6} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>Nazwisko <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control name={"lastName"} onChange={handleChange}
                                      value={values.lastName}
                                      placeholder={"Enter your lastName"}
                                      isValid={touched.lastName && !errors.lastName}
                                      isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type={"invalid"}>{errors.lastName}</Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={"mt-2"}>
                <Col xl={6} md={6} lg={6} sm={12} xs={12}>
                    <Form.Group>
                        <Form.Label>E-mail <span className={"text-danger"}>*</span></Form.Label>
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
                        <Form.Label>Hasło <span className={"text-danger"}>*</span></Form.Label>
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
                    <Form.Label>Telefon (opcjonalnie)</Form.Label>
                    <Form.Control name={"phone"} onChange={handleChange} value={values.phone}
                                  placeholder={"Enter your phone number"}/>
                </Form.Group>
            </Col>
            <Col className={"mt-2"}>
                <Form.Group>
                    <Form.Label>Adres (opcjonalnie)</Form.Label>
                    <Form.Control name={"address"} onChange={handleChange} value={values.address}
                                  placeholder={"Enter your address"}/>
                </Form.Group>
            </Col>
            <Col className={"mt-2"} xl={6} lg={6} md={6}>
                <Form.Group>
                    <Form.Label>Prawo jazdy <span className={"text-danger"}>*</span></Form.Label>
                    <Form.Select name={"hasDrivingLicense"} onChange={handleChange}
                                 value={values.hasDrivingLicense}
                                 isValid={touched.hasDrivingLicense && !errors.hasDrivingLicense}
                                 isInvalid={!!errors.hasDrivingLicense}
                    >
                        <option disabled={true}>Czy posiadasz prawo jazdy?</option>
                        <option value={"true"}>Tak</option>
                        <option value={"false"}>Nie</option>
                    </Form.Select>
                    <Form.Control.Feedback type={"invalid"}>{errors.hasDrivingLicense}</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <button type="submit" class="flex-none mt-4 w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create account</button>
        </Form>)}
        </Formik>
    </Container>)
}

export default SignUp;