import {Button, Container, Form, Nav} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {login} from "../../Jwt/Actions/auth";
import {Navigate} from "react-router"
import Loading from "../Loading";
import { toast } from 'react-toastify';

const SignIn = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const {isLoggedIn} = useSelector((state) => state.auth);

    if (isLoggedIn) {
        return <Navigate to={"/profile"}/>
    }

    const signInSchema = yup.object().shape({
        email: yup.string()
            .required('Required'),
        password: yup.string()
            .required('Required')
    });

    if (loading) {
        return <Loading/>
    }


    return (<Container className={"text-white w-50 mt-16"}>
        <div className={"d-flex flex-column"}>
            <h1>Zaloguj się</h1>
            <p>lub <a className="underline" href={"/login/signup"}>stwórz konto</a></p>
        </div>
        <Formik
            validationSchema={signInSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
                setLoading(true);
                setTimeout(() => {
                    dispatch(login(values.email, values.password))
                        .then((x) => {
                            setLoading(false);
                            //window.location.reload();
                            toast.success(x, {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark"
                                });
                        })
                        .catch((errorMessage) => {
                            toast.error(errorMessage, {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark"
                                });
                            setLoading(false);
                        })
                }, 400);
            }}>{({handleSubmit, handleChange, values, touched, errors}) => (<Form onSubmit={handleSubmit}>
            <Form.Group className={"mt-2"}>
                <Form.Label>E-mail</Form.Label>
                <Form.Control name={"email"} onChange={handleChange} value={values.email} type={"email"}
                              placeholder={"Enter email"}
                              className={"p-2"}
                              isValid={touched.email && !errors.email}
                              isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type={"invalid"}>{errors.email}</Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={"mt-3"}>
                <Form.Label>Hasło</Form.Label>
                <Form.Control name={"password"} onChange={handleChange} value={values.password} type={"password"}
                              placeholder={"Password"}
                              className={"p-2"}
                              isValid={touched.password && !errors.password}
                              isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type={"invalid"}>{errors.password}</Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <button type="submit" className="flex-none mt-4 w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Zaloguj się</button>
        </Form>)}
        </Formik>
    </Container>)
}

export default SignIn;