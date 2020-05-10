
import Encabezado from './Encabezado';
import Table from '../container/Table'
import './style/slides.css';

import React, { Component } from 'react';
import ModificarPub from './ModificarPub';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService();

class Publicidad extends Component {

    state = {
        banderaM: false,
        banderaN: false,
        id: '',
        titulo: '',
        descripcion: '',
        url: '',
        datos: [],
        buscador: '',
        resultado:''
    }

    //Con este metodo haga el llamado a los datos al back para guardarlos en el estado.
    solicitud = () => {
        solicitudBack.getListPublicidad()
            .then(res => {
                this.setState({
                    datos: res
                })
                this.buscador(this.state.buscador)
            })
    }

    //Con este metodo hago el llamdo a solicitud una vez se renderize el componente.
    async componentDidMount() {
        this.solicitud()
    }

    handleCrearPublicidad = async (e, publicidad) => {
        e.preventDefault()
        //console.log(publicidad)
        solicitudBack.postRegisterPublicidad(publicidad
        ).then(res => {
            this.solicitud()
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()

    }

    handleModificarPublicidad = async (e, publicidad) => {
        e.preventDefault()
        solicitudBack.putUpdatePublicidad(publicidad
        ).then(res => {
            this.solicitud()
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()
    }

    cambiarEstadoPublicidad = (publicidad) => {
        //console.log(publicidad)
        solicitudBack.putUpdatePublicidad(publicidad
        ).then(res => {
            this.solicitud()
        })
            .catch(error => console.log(error))
    }

    cerrarFormulario = () => {
        this.setState({
            banderaM: false,
            banderaN: false
        })
    }

    //Con este metodo de acuerdo al boton que haya presionado si modificar o nuevo, se llama el componente formulario
    mostrarFormulario = () => {
        if (this.state.banderaM === true) {
            return (<ModificarPub
                id={'Modificar'}
                onSubmit={this.handleModificarPublicidad}
                idRow={this.state.id}
                titulo={this.state.titulo}
                descripcion={this.state.descripcion}
                url={this.state.url}
                h1={'publicidade.pb_change'}
                nameBtn={'publicidade.pb_change'}
                cancelar={this.cerrarFormulario} />
            )
        }
        else if (this.state.banderaN === true) {
            return (<ModificarPub
                id={'Nuevo'}
                onSubmit={this.handleCrearPublicidad}
                idRow={''}
                dato1={''}
                dato2={''}
                dato3={''}
                dato4={''}
                h1={'publicidade.pb_new'}
                nameBtn={'publicidade.pb_new'}
                cancelar={this.cerrarFormulario} />)
        }
        return null
    }

    mostrarTable = () => {
        return (
            <React.Fragment>
                <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                <Table t1={'Id'} t2={'Titulo'} t3={'Descripción'} t4={'Url'} t5={'Modificar'} t6={'Estado'} tabla='publicidad' datos={this.state.datos} modificar={this.modificar} cambiarEstado={this.cambiarEstadoPublicidad} />
                </div>
            </React.Fragment>
        )
    }
    //Este el metodo que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar
    //y junto con este actualizo la banderaMa true para que se muestre el formulario correspondiente
    modificar = (id, titulo, descripcion, url) => {
        this.setState({
            id: id,
            titulo: titulo,
            descripcion: descripcion,
            url: url,
            banderaM: true,
            banderaN: false,
        })
    }

    //Cuando presione en nuevo cambia la banderaN a true para mostrar el formulario correspondiente
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
        if(e.keyCode===8){
            this.solicitud()
        }
    }

    buscador = (letra) => {
        const datosNuevos = this.state.datos.filter(function(fila){
            if(fila.titulo.toLowerCase().indexOf(letra)!==-1){
                return fila;
            }else if(fila.descripcion.toLowerCase().indexOf(letra)!==-1)
            {
                return fila;
            }   
        })
        this.setState({
            datos: datosNuevos,
            resultado:datosNuevos.length
        })
        
    }

    default = (e) =>{
        e.preventDefault();
    }

    render() {
        return (
            <div onKeyDown={this.onKeyPressed} className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
                <Encabezado
                    titulo="publicidade.pb_int-title"
                    descripcion="publicidade.pb_int-description" />
                <div className="container" style={{ justifyContent: "center" }}>
                    <form method="POST" onSubmit={this.default}>
                        <div className="form-row justify-content-between">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{ marginBottom: "10px" }}>
                                <div className="input-group">
                                    <input type="text" name="buscador" value={this.state.buscador}  onChange={this.onChange} autoComplete="off" className="form-control" required />
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
                                    <svg className="bi bi-file-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                                        <path fillRule="evenodd" d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                                    </svg>
                                &nbsp; Nuevo
                            </button>
                            </div>
                        </div>
                        <div className="alert alert-success col-md-6">
                                Resultados:
                                <strong> {this.state.resultado} filas encontradas.</strong>
                                         
                            </div>
                        {this.mostrarTable()}
                    </form>
                </div>
                {this.mostrarFormulario()}
            </div>
        )
    }

}

export default Publicidad
