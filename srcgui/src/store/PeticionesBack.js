import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';


export default class BackService {

    constructor() { }
    //PQRS
    async postPQRS(solitAtent) {
        const url = `${API_URL}/api/pqrs/`;
        return axios.post(url, solitAtent).then(res => res.data)
            .catch(error => console.log(error));
    }
    //TARIFA
    async postTarifa(tarifa) {
        const url = `${API_URL}/oper/tarifa/`;
        return axios.post(url, tarifa).then(res => res.data)
            .catch(error => console.log(error));
    }
    //BANCO
    async getBanco() {
        const url = `${API_URL}/oper/banco/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error));
    }
    //REPORTES
    async getReporte() {
        const url = `${API_URL}/oper/reporte/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error));
    }
    //USUARIOS
    async getListUser() {
        const url = `${API_URL}/auth/user/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error));
    }
    async postRegisterUser(user) {
        const url = `${API_URL}/auth/user/`;
        return axios.post(url, user).then(res => res.data)
            .catch(error => console.log(error));
    }
    async putUpdateUser(user) {
        const url = `${API_URL}/auth/account/change-active/${user.id}/`;
        return axios.put(url, user).then(res => res.data)
            .catch(error => console.log(error));

    }
    //PUBLICIDAD
    async  getListPublicidad() {
        const url = `${API_URL}/api/articulo/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error))
    }
    async postRegisterPublicidad(publicidad) {
        const url = `${API_URL}/api/articulo/`;
        return axios.post(url, publicidad).then(res => res.data)
            .catch(error => console.log(error));
    }
    async putUpdatePublicidad(publicidad) {
        const url = `${API_URL}/api/articulo/update/${publicidad.id}/`;
        return axios.put(url, publicidad).then(res => res.data)
            .catch(error => console.log(error));
    }
    
    //ACTIVOS
    async getTransformador() {
        const url = `${API_URL}/oper/activo-trans/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error));
    }

    async postTransformador(transF) {
        const url = `${API_URL}/oper/activo-trans/`;
        return axios.post(url, transF).then(res => res.data)
            .catch(error => console.log(error));
    }

    async getSubestacion() {
        const url = `${API_URL}/oper/activo-sub/`;
        return axios.get(url).then(res => res.data)
            .catch(error => console.log(error));
    }

    async postSubestacion(sube) {
        const url = `${API_URL}/oper/activo-sub/`;
        return axios.post(url, sube).then(res => res.data)
                .catch(error => console.log(error));
    }
}
