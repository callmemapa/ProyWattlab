import axios from 'axios';
import BackService from '../PeticionesBack';
import * as actionTypes from './actionTypes';

const solicitudBack = new BackService();

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authlogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const authLogin = (username, password) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    return dispatch => {
        dispatch(authStart());

        axios.post('http://127.0.0.1:8000/auth/login/', {
            username: username,
            password: password
        }, config)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                localStorage.setItem('authenticate', true);
                dispatch(authSuccess(token));
            })
            .catch(err => {
                dispatch(authFail(err));
            }) 
    }
}


