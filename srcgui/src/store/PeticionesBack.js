import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';


export default class BackService {

    constructor() { }
    ///PQRS
    postPQRS(solitAtent) {
        const url = `${API_URL}/api/pqrs/`;
        return axios.post(url, solitAtent).then(res => res.data)
                                .catch(error => console.log(error));
    }
    //USUARIOS
    getListUser() {
        const url = `${API_URL}/auth/user/`;
        return axios.get(url).then(res => res.data)
                             .catch(error =>console.log(error));                           
    }
    postRegisterUser(user) {
        const url = `${API_URL}/auth/user/`;
        return axios.post(url, user).then(res => res.data)
                            .catch(error => console.log(error));
    }
    putUpdateUser(user) {   
        const url = `${API_URL}/auth/account/change-active/${user.id}/`;
        return axios.put(url, user).then(res => res.data)
                            .catch(error => console.log(error));
        
    }
    //PUBLICIDAD
    getListPublicidad() {
        const url = `${API_URL}/api/articulo/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error))
    }
    postRegisterPublicidad(publicidad) {
        const url = `${API_URL}/api/articulo/`;
        return axios.post(url, publicidad).then(res => res.data)
            .catch(error => console.log(error));
    }
    putUpdatePublicidad(publicidad) {
        const url = `${API_URL}/api/articulo/update/${publicidad.id}/`;
        return axios.put(url, publicidad).then(res => res.data)
            .catch(error => console.log(error));
    }

    //CLIENTES
    getListCliente(){
        const url = `${API_URL}/oper/cliente/`;
        return axios.get(url).then(res=> res.data)
            .catch(error => console.log(error))
    }

}
