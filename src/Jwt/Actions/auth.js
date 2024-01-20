import AuthServices from "../Services/auth.services";
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_MESSAGE} from "./Type";

export const register = (data) => (dispatch) => {
    return AuthServices.register(data).then((response) => {
        dispatch({
            type: REGISTER_SUCCESS
        })
        dispatch({
            type: SET_MESSAGE, payload: response.data.message
        })
        return Promise.resolve();
    }, (error) => {
        const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())

        dispatch({
            type: REGISTER_FAIL
        })

        dispatch({
            type: SET_MESSAGE,
            payload: message
        })

    })
}

export const login = (email, password) => (dispatch) => {
    return AuthServices.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data}
            })
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())

            dispatch({
                type: LOGIN_FAIL
            })

            dispatch({
                type: SET_MESSAGE,
                payload: message
            })
            return Promise.reject()
        }
    )
}

export const logout = () => (dispatch) => {
    AuthServices.logout();
    dispatch({
        type: LOGOUT
    })
}