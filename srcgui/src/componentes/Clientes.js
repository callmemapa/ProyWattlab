import Encabezado from './Encabezado';
import Table from '../container/Table'
import './style/slides.css';

import React, { Component } from 'react';
import ModificarClie from './ModificarClie'
import BackService from '../store/PeticionesBack';
import alerta from '../componentes/Alertas';
const solicitudBack = new BackService();
const notificaciones = new alerta();

class Clientes extends Component {


    state = {
        banderaM: false,
        banderaN: false,
        banderaC: false,
        banderaCont: false,
        id: '',
        nmro_idntfccn: '',
        prmr_nmbre: '',
        prmr_aplldo: '',
        tpo_idntfcn: '',
        tpT_clnte: '',
        datos: [],
        contratos: [],
        buscador: '',
        resultado: ''
    }

    //Con este metodo haga el llamado a los datos al back para guardarlos en el estado.
    solicitud = () => {
        solicitudBack.getListCliente()
            .then(res => {
                this.setState({
                    datos: res
                })

                this.buscador(this.state.buscador)
            })
    }

    solicitudContratos = () => {
        solicitudBack.getListContratos()
            .then(res => {
                this.setState({
                    contratos: res
                })
            })
    }

    //Con este metodo hago el llamdo a solicitud una vez se renderize el componente.
    async componentDidMount() {
        this.solicitud()
        this.solicitudContratos()
    }

    handleCrearCliente = async (e, cliente) => {
        e.preventDefault()
        //console.log(publicidad)
        solicitudBack.postRegisterCliente(cliente
        ).then(res => {
            this.solicitud()
            notificaciones.exito()
        })
            .catch(error => {
                console.log(error)
                notificaciones.error()
            })
        this.cerrarFormulario()

    }

    handleCrearContrato = async (e, contrato) => {
        e.preventDefault()
        solicitudBack.postRegisterContrato(contrato
        ).then(res => {

            this.solicitudContratos()
            notificaciones.exito()
        })
            .catch(error => {
                console.log(error)
                notificaciones.error()
            })
        this.cerrarFormulario()

    }

    handleModificarCliente = async (e, cliente) => {
        e.preventDefault()
        solicitudBack.putUpdateCliente(cliente
        ).then(res => {
            this.solicitud()
            notificaciones.exito()
        })
            .catch(error => {
                console.log(error)
                notificaciones.error()
            })
        this.cerrarFormulario()
    }

    cambiarEstadoPublicidad = (cliente) => {
        //console.log(cliente)
        solicitudBack.putUpdatePublicidad(cliente
        ).then(res => {
            this.solicitud()
        })
            .catch(error => console.log(error))
    }

    cerrarFormulario = () => {
        console.log('holaaa')
        this.setState({
            banderaM: false,
            banderaN: false,
            banderaC: false
        })
    }

    //Con este metodo de acuerdo al boton que haya presionado si modificar o nuevo, se llama el componente formulario
    mostrarFormulario = () => {
        if (this.state.banderaM === true) {
            return (<ModificarClie
                id={'Modificar'}
                onSubmit={this.handleModificarCliente}
                idRow={this.state.id}
                nombre={this.state.prmr_nmbre}
                apellido={this.state.prmr_aplldo}
                numeroIdent={this.state.nmro_idntfccn}
                tipoIdent={this.state.tpo_idntfcn}
                tipoClient={this.state.tpT_clnte}
                h1={'Modificar Cliente'}
                nameBtn={'Modificar Cliente'}
                cancelar={this.cerrarFormulario} />
            )
        }
        else if (this.state.banderaN === true) {
            return (<ModificarClie
                id={'Nuevo'}
                onSubmit={this.handleCrearCliente}
                idRow={''}
                nombre=''
                apellido=''
                numeroIdent=''
                tipoIdent=''
                tipoClient=''

                h1={'Nuevo Cliente'}
                nameBtn={'Crear Cliente'}
                cancelar={this.cerrarFormulario} />)
        } else if (this.state.banderaC === true) {
            return (<ModificarClie
                id={'Crear'}
                onSubmit={this.handleCrearContrato}
                idRow={this.state.id}
                nombre={this.state.prmr_nmbre}
                apellido={this.state.prmr_aplldo}
                numeroIdent={this.state.nmro_idntfccn}
                tipoIdent={this.state.tpo_idntfcn}
                tipoClient={this.state.tpT_clnte}
                h1={'Nuevo Contrato'}
                nameBtn={'Crear Contrato'}
                cancelar={this.cerrarFormulario} />
            )
        }
        return null
    }

    mostrarTable = () => {
        return (
            <React.Fragment>
                <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                    <Table t1={'Id'} t2={'Tipo ident'} t3={'Número ident'} t4={'Nombres'} t5={'Apellidos'} t6={'Tipo Cliente'} t7={'Modificar Cliente'} t8={'Crear Contrato'} t9={'Ver Contratos'} tabla='cliente' datos={this.state.datos} modificar={this.modificar} crearContrato={this.crearContrato} verContrato={this.verContratos} cambiarEstado={this.cambiarEstadoPublicidad} />
                </div>
            </React.Fragment>
        )
    }

    mostrarTablaCon = () => {

        if (this.state.banderaCont === false) {
            return null
        } else {
            return (
                <React.Fragment>
                    <h1 className="display-4">Contratos</h1><br />
                    <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                        <Table t1={'Id'} t2={'Direccion'} t3={'Estrato'} t4={'Modificar Contrato'} t5={'Estado'} tabla='contrato' datos={this.state.contratos} modificar={this.modificar} crearContrato={this.crearContrato} cambiarEstado={this.cambiarEstadoPublicidad} />
                    </div>
                </React.Fragment>
            )
        }


    }
    //Este el metodo que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar
    //y junto con este actualizo la banderaMa true para que se muestre el formulario correspondiente
    modificar = (id, nombre, apellido, ident, tipoIdent, tipoClient) => {
        this.setState({
            id: id,
            nmro_idntfccn: ident,
            prmr_nmbre: nombre,
            prmr_aplldo: apellido,
            tpo_idntfcn: tipoIdent,
            tpT_clnte: tipoClient,
            banderaM: true,
            banderaN: false,
            banderaC: false,
        })
    }

    crearContrato = (id, nombre, apellido, ident, tipoIdent, tipoClient) => {
        this.setState({
            id: id,
            banderaC: true,
            banderaM: false,
            banderaN: false,
            nmro_idntfccn: ident,
            prmr_nmbre: nombre,
            prmr_aplldo: apellido,
            tpo_idntfcn: tipoIdent,
            tpT_clnte: tipoClient,

        })
    }

    //Cuando presione en nuevo cambia la banderaN a true para mostrar el formulario correspondiente
    nuevo = () => {
        this.setState({
            banderaN: true,
            banderaC: false,
            banderaM: false,


        });
    }

    verContratos = () => {
        this.setState({
            banderaCont: true
        })
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

    buscador = (letra) => {
        const datosNuevos = this.state.datos.filter(function (fila) {
            if (fila.prmr_nmbre.toLowerCase().indexOf(letra) !== -1) {
                return fila;
            } else if (fila.nmro_idntfccn.toLowerCase().indexOf(letra) !== -1) {
                return fila;
            } else if (fila.prmr_aplldo.toLowerCase().indexOf(letra) !== -1) {
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
        return (
            <div onKeyDown={this.onKeyPressed} className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
                <Encabezado
                    titulo="Panel de Clientes"
                    descripcion="A contiuación, encontrará el listado de clientes" />
                <div className="container" style={{ justifyContent: "center" }}>
                    <form method="POST" onSubmit={this.default}>
                        <div className="form-row justify-content-between">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{ marginBottom: "10px" }}>
                                <div className="input-group">
                                    <input type="text" name="buscador" value={this.state.buscador} onChange={this.onChange} autoComplete="off" className="form-control" required />
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
                                <button className="btn btn-danger" onClick={this.nuevo} type="button" >
                                    <svg className="bi bi-file-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                                        <path fillRule="evenodd" d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                                    </svg>
                                &nbsp; Nuevo
                            </button>
                            </div>
                        </div>

                        {this.mostrarTable()}
                        {this.mostrarTablaCon()}
                    </form>
                </div>
                {this.mostrarFormulario()}
            </div>
        )
    }
}

export default Clientes
