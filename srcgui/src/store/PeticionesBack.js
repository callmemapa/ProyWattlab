import axios from 'axios';
import alerta from '../componentes/Alertas';
const notificaciones = new alerta();
const API_URL = 'http://127.0.0.1:8000';



export default class BackService {

    constructor() { }
    //PQRS
    async postPQRS(solitAtent) {
        const url = `${API_URL}/api/pqrs/`;
        return axios.post(url, solitAtent)
            .then(res => res.data)
            .catch(error => {
                console.log(error)
                notificaciones.error()
            });
    }
    //TARIFA
    async postTarifa(tarifa) {
        const url = `${API_URL}/oper/tarifa/`;
        return axios.post(url, tarifa)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    //BANCO
    async getBanco() {
        const url = `${API_URL}/oper/banco/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    //REPORTES
    async getReporte() {
        const url = `${API_URL}/oper/reporte/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    //FACTURA
    async postFactura(factura) {
        const url = `${API_URL}/oper/factura/`;
        return axios.post(url, factura)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    //USUARIOS
    async getListUser() {
        const url = `${API_URL}/auth/user/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    async postRegisterUser(user) {
        const url = `${API_URL}/auth/user/`;
        return axios.post(url, user).then(res => res.data)
            .catch(error => console.log(error));
    }
    async putUpdateUser(user) {
        const url = `${API_URL}/auth/account/change-active/${user.id}/`;
        return axios.put(url, user)
            .then(res => res.data)
            .catch(error => console.log(error));

    }
    //PUBLICIDAD
    async  getListPublicidad() {
        const url = `${API_URL}/api/articulo/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error))
    }
    async postRegisterPublicidad(publicidad) {
        const url = `${API_URL}/api/articulo/`;
        return axios.post(url, publicidad)
            .then(res => res.data)
            .catch(error => {
                console.log(error)
                notificaciones.error()
            });
    }
    async putUpdatePublicidad(publicidad) {
        const url = `${API_URL}/api/articulo/update/${publicidad.id}/`;
        return axios.put(url, publicidad)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    //ACTIVOS
    async getTransformador() {
        const url = `${API_URL}/oper/activo-trans/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    async postTransformador(transF) {
        const url = `${API_URL}/oper/activo-trans/`;
        return axios.post(url, transF)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    async getSubestacion() {
        const url = `${API_URL}/oper/activo-sub/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    async postSubestacion(sube) {
        const url = `${API_URL}/oper/activo-sub/`;
        return axios.post(url, sube)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    //CLIENTES
    async getListCliente() {
        const url = `${API_URL}/oper/cliente/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error))
    }
    async postRegisterCliente(cliente) {
        const url = `${API_URL}/oper/cliente/`;
        return axios.post(url, cliente)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    async putUpdateCliente(cliente) {
        const url = `${API_URL}/oper/cliente/${cliente.id}/`;
        return axios.put(url, cliente)
            .then(res => res.data)
            .catch(error => console.log(error));

    }

    //CONTRATOS
    async getListContratos() {
        const url = `${API_URL}/oper/cliente-contrato/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error))
    }

    async postRegisterContrato(contrato) {
        const url = `${API_URL}/oper/cliente-contrato/`;
        return axios.post(url, contrato)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    async putUpdateContrato(contrato) {
        const url = `${API_URL}/oper/cliente-contrato/${contrato.id}/`;
        return axios.put(url, contrato)
            .then(res => res.data)
            .catch(error => console.log(error));
    }

    // ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
    // PAGOS
    async getListPagos() { // REVISAR BIEN ACÁ!!!
        const url = `${API_URL}/oper/pago/`;
        return axios.get(url)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    async postRegisterPagos(pagos) {
        const url = `${API_URL}/oper/pago/`;
        return axios.post(url, pagos)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
    /*async putUpdatePagos(pagos) {
        const url = `${API_URL}/oper/pago/${pagos.id}/`;
        return axios.put(url, pagos)
            .then(res => res.data)
            .catch(error => console.log(error));
    }*/
    
}
