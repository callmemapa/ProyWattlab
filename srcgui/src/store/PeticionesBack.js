import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';


export default class BackService {

    constructor() { }

    postPQRS(solitAtent) {
        const url = `${API_URL}/api/pqrs/`;
        return axios.post(url, solitAtent).then(res => res.data);
    }
    getListUser() {
        const url = `${API_URL}/auth/user/`;
        return axios.get(url).then(res => res.data);
    }
    postRegisterUser(user) {
        const url = `${API_URL}/auth/user/`;
        return axios.post(url, user).then(res => res.data);
    }

}

/* { DATOS QUE SE ENVIAN PARA CREAR LOS USUARIOS
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password,
        profile: {
            identificacion: identificacion,
            tipo_usuario: tipo_usuario
        }
} */