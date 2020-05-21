// ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
import React, { Component } from 'react';
//import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';
import Table from '../container/Table';
import PagosBancos from './PagosBancos';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService(); // Datos al back-end.

class PagosClientes extends Component {

    handleNewPagosBancos = async (e, pagos) => {
        e.preventDefault()
        console.log(pagos)
        solicitudBack.postRegisterPagos(pagos
        ).then(res => {
            //console.log(res)
            this.solicitud()
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()
    }

    handleChangePagosBancos = async (e, pagos) => {
        e.preventDefault()
        solicitudBack.putUpdatePagos(pagos
        ).then(res => {
            //console.log(res)
            this.solicitud()
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()
    }

    /*cambiarEstadoPagos = (pagos) => {
        //console.log(pagos)
        solicitudBack.putUpdatePagos(pagos
        ).then(res => {
            //console.log(res)
            this.solicitud()
        })
            .catch(error => console.log(error))
    }*/

    // Con estos estados me doy cuenta que boton se presionó si el 'Modificar' o el 'Nuevo'.
    state = {
        banderaM: false,
        banderaN: false,
        id: '',
        idntfccn_bnco: '',
        cnsctvo_fctra: '',
        nmro_unco_idntfccn_usro: '',
        vlr_pgdo: '',
        tp_pgdo: '',
        nmro_trjt: '',
        obsrvcn:'',
        banco: [],
        datos: [],
        buscador: '',
        resultado: ''
    }

    // Con este método hago el llamado a solicitud una vez se renderize el componente.
    componentDidMount() {
        this.submitSub()
        this.solicitud()


    }

    submitSub = async () => {
        solicitudBack.getBanco()
          .then(res => {
            this.setState({
              banco: res
            })
          })
      }

    // Con este método haga el llamado a los datos al back-end para guardarlos en el estado.
    solicitud = () => {
        solicitudBack.getListPagos()
            .then(res => {
                this.setState({
                    datos: res
                })
                this.buscador(this.state.buscador)
            })
    }

    cerrarFormulario = () => {
        this.setState({
            banderaM: false,
            banderaN: false
        })
    }

    mostrarTable = () => {
        return (
            <React.Fragment>
                <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                    <Table t1={'ID'} t2={'Identf. Banco'} t3={'Consect. Factura'} t4={'Nº ID Usuario'} t5={'Valor Pagado'} t6={'Tipo Pago'} t7={'Nº Tarjeta'} t8={'Observación'} tabla='pagos' datos={this.state.datos} modificar={this.modificar}  />
                </div>
            </React.Fragment>
        )
    }

    // En este solicito los datos a la API y los guardo en el estado datos.
    // Con este método de acuerdo al boton que haya presionado si 'Modificar' o 'Nuevo', se llama el componente formulario.
    mostrarFormulario = () => {
        if (this.state.banderaN === true) {
            return(
                <PagosBancos
                    id={'Nuevo'}
                    onSubmit={this.handleNewPagosBancos}
                    idRow={''}
                    idntfccn_bnco={''}
                    cnsctvo_fctra={''}
                    nmro_unco_idntfccn_usro={''}
                    vlr_pgdo={''}
                    tp_pgdo={''}
                    nmro_trjt={''}
                    obsrvcn={''}
                    h1={'Añadir pago'}
                    nameBtn={'Añadir pago'}
                    cancelar={this.cerrarFormulario}
                    dato={this.state.banco}
                />
            )
        } 
        return null;
    }

    // Este es el método que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar.
    // Junto con este actidntfccn_bncoualizo la banderaM a 'true' para que se muestre el formulario correspondiente.
    modificar = (id, idntfccn_bnco, cnsctvo_fctra, nmro_unco_idntfccn_usro, vlr_pgdo, tp_pgdo, nmro_trjt, obsrvcn) => {
        this.setState({
            id: id,
            idntfccn_bnco: idntfccn_bnco,
            cnsctvo_fctra: cnsctvo_fctra,
            nmro_unco_idntfccn_usro: nmro_unco_idntfccn_usro,
            vlr_pgdo: vlr_pgdo,
            tp_pgdo: tp_pgdo,
            nmro_trjt: nmro_trjt,
            obsrvcn: obsrvcn,
            banderaM: true,
            banderaN: false,
        })
    }

    // Cuando presione en 'Nuevo' cambia la banderaN a 'true' para mostrar el formulario correspondiente.
    nuevo = () => {
        this.setState({
            banderaM: false,
            banderaN: true,
        });
    }

    onChange = (e) => {
        this.setState({
            buscador: e.target.value.toLowerCase()
        })
        this.buscador(e.target.value.toLowerCase());
    }

    onKeyPressed = (e) => {
        if (e.keyCode === 8) {
            this.solicitud()
        }
    }

    buscador = (letra) => { // ARREGLAR ESTO (TABLAS EN DJANGO). // REVISAR BIEN ACÁ!!!
        const datosNuevos = this.state.datos.filter(function (fila) {
            if (fila.tp_pgdo.toLowerCase().indexOf(letra) !== -1) { // REVISAR BIEN ACÁ!!!
                return fila;
            } else if (fila.obsrvcn.toLowerCase().indexOf(letra) !== -1) { // REVISAR BIEN ACÁ!!!
                return fila;
            }
        })
        this.setState({
            datos: datosNuevos,
            resultado: datosNuevos.length
        })
    }

    default = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div onKeyDown={this.onKeyPressed} className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
                <Encabezado
                    titulo="Panel de pagos de bancos"
                    descripcion="Este es el panel de pagos de bancos"
                />
                <div className="container" style={{ justifyContent: "center" }}>
                    <form method="POST" onSubmit={this.default}>
                        <div className="form-row justify-content-between">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: "10px" }}>
                                <div className="input-group">
                                    <input type="text" name="buscador" value={this.state.buscador} onChange={this.onChange} autoComplete="off" className="form-control" required></input>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend2">
                                            <svg className="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-auto mr-auto">
                                <button className="btn btn-success" type="button">Buscar</button>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-danger" type="button" onClick={this.nuevo}>
                                    <svg className="bi bi-person-plus-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="" />
                                        <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                                    </svg>
                                    &nbsp; Nuevo
                                </button>
                            </div>
                            <div className="alert alert-success col-md-6">
                                Resultados:
                                <strong> {this.state.resultado} filas encontradas.</strong>
                            </div>
                            {this.mostrarTable()}                                                                               
                        </div>                      
                    </form>            
                </div>
                {this.mostrarFormulario()}            
            </div>
        )
    }
}

export default PagosClientes;