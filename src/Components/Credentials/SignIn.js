import {Button, Container, Form, Nav} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {login} from "../../Jwt/Actions/auth";
import {Navigate} from "react-router"

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

    return (<Container className={"text-white w-50"}>
        <div className={"d-flex flex-column"}>
            <h1>Sign in</h1>
            <p>or <a href={"/login/signup"}>create an account</a></p>
        </div>
        <Formik
            validationSchema={signInSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
                setTimeout(() => {
                    dispatch(login(values.email, values.password))
                        .then(() => {
                            window.location.reload();
                        })
                        .catch(() => {
                            setLoading(false);
                        })
                }, 400);
            }}>{({handleSubmit, handleChange, values, touched, errors}) => (<Form onSubmit={handleSubmit}>
            <Form.Group className={"mt-2"}>
                <Form.Label>Email address</Form.Label>
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
                <Form.Label>Password</Form.Label>
                <Form.Control name={"password"} onChange={handleChange} value={values.password} type={"password"}
                              placeholder={"Password"}
                              className={"p-2"}
                              isValid={touched.password && !errors.password}
                              isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type={"invalid"}>{errors.password}</Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant={"outline-warning"} className={"mt-3 w-100"} type={"submit"}>Sign in</Button>
        </Form>)}
        </Formik>
    </Container>)
}

export default SignIn;