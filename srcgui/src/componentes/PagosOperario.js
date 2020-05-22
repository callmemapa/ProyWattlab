import React, { Component, Suspense, Spinner } from 'react'
import { Translation, withTranslation } from 'react-i18next';
import i18n from "i18next";
import { Layout } from 'antd';
import Menu from './Menu';
import Table from '../container/Table'
import ModificarUse from './ModificarUse'
import BackService from '../store/PeticionesBack';
import BotonVisualizar from './BotonVisualizar';
import Factura from './Factura';
import MAFactura from '../container/MAFactura'
import jsPDF from 'jspdf'
import { renderToString } from 'react-dom/server';
import html2canvas from 'html2canvas';
import ImagePublicidad from './Image';
import PaymentForm from './PaymentForm'
import Encabezado from './Encabezado';
import alerta from '../componentes/Alertas';

const notificaciones = new alerta();
var Barcode = require('react-barcode');

const solicitudBack = new BackService();

class PagosOperario extends Component {
    myRef = React.createRef();

    state = {
        banderaVer: false,
        banderaPago: false,
        id: '',
        datos: [],
        buscador: '',
        resultado: '',
        estado: true,
        //mode: ''
    }

    /*constructor(props) {
        super(props);
        this.handleFact = this.handleFact.bind(this);
    }*/

    handleNewPagosBancos = async (e, pagos) => {
        e.preventDefault()
        console.log(pagos)
        solicitudBack.postRegisterPagos(pagos
        ).then(res => {
            //console.log(res)
            this.setState({
                banderaPago: false
            })
        })
            .catch(error => console.log(error))
    }


    handleConsultarFactura = async (e, contrato) => {
        e.preventDefault()
        //console.log(publicidad)
        solicitudBack.postFactura({ "contrato": contrato }
        ).then(res => {
            console.log(res)
            this.setState({
                datos: res,
                estado: res[0].estado,
                id: contrato,
                resultado: res.length,
            })
            this.mostrarFactura()
            //notificaciones.exito()
        })
            .catch(error => {
                console.log(error)
                this.setState({
                    datos: [],
                    resultado: 0,
                    estado: true,
                    banderaPago:false,

                })
                //notificaciones.error()
            })
    }

    verDatos = () => {
        { console.log(this.state.banderaVer) }
        this.setState({
            banderaVer: true,
        })
    }



    async componentDidMount() {

    }
    //Para revisar
    cerrarFactura = () => {
        console.log('holaaa x2')
        this.setState({
            banderaVer: false,
        })
    }

    mostrarFactura() {
        if (this.state.banderaVer === true) {
            { console.log(this.state.banderaVer) }
            return (

                <Factura />
            )
        }
        else {
            return <Factura />
        }
    }

    validar = () => {
        if (this.state.banderaPago === true) {
            this.mostrarFactura()
        }
    }

    pagarTarjeta = () => {
        console.log('h')
        this.setState({
            banderaPago: true
        })
    }

    pagarEfectivo = ()=>{
        notificaciones.confirmarPago()
    }

    mostrarForPago = () => {
        if (this.state.banderaPago === true) {
            console.log(this.state.datos[0].id)

            return <PaymentForm consFact={this.state.datos[0].id} valorPagado={this.state.datos[0].vlr_ttl} onSubmit={this.handleNewPagosBancos} />
        }
    }

    mostratBotonPago = () => {
        if (this.state.resultado !== 0) {
            if (this.state.estado === true) {
                return (
                    <React.Fragment>
                        <button style={{ cursor: "default" }} type="button" name="info" className="btn btn-lg btn-success mx-auto d-block col-md-5 " disabled>La factura ya esta cancelada</button>
                    </React.Fragment>             
                )
            } else {
                
                return (
                    <React.Fragment>    
                        <button type="button" name="pagar" onClick={this.pagarTarjeta} className="btn  btn-lg btn-danger mx-auto d-block col-md-5">Pagar Online</button>
                        <button type="button" name="pagar" onClick={this.pagarEfectivo} className="btn  btn-lg btn-success mx-auto d-block col-md-5">Pagar en Efectivo</button>  
                    </React.Fragment>
                )
            }
        } else {
            return (
                <button style={{ cursor: "default" }} type="button" name="info" className="btn btn-lg btn-danger mx-auto d-block col-md-12 " disabled>No hay Facturas</button>
            )
        }


    }

    mostrarInfoFactura = () => {
        if (this.state.banderaVer === true) {
            return (
                <React.Fragment>
                    <div className="jumbotron">
                        <div className="container" id="me">
                            <div className="form-row" style={{ textAlign: "center" }}>
                                <div className="form-group col-md-12">
                                    <svg class="bi bi-file-text" width="8em" height="8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z" clip-rule="evenodd" />
                                        <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 015 10h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 8h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 4h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="form-group col-md-12" id="Factura" style={{ fontFamily: "helvetica", fontStyle: "" }}>
                                    {this.state.datos.map(factura => (
                                        <div>
                                            <h5 className="display-5">Número de factura: {factura.id}</h5>
                                            <h5 className="display-5">Periodo Consumo: {factura.cnsctvo_cnsmo.prdo_cnsmo}</h5>
                                            <h5 className="display-5">Identificación contrato: {factura.cnsctvo_cnsmo.idntfccn_cntrto.id}</h5>
                                            <h5 className="display-5">Estrato socioeconómico: {factura.cnsctvo_cnsmo.idntfccn_cntrto.estrt_scl}</h5>
                                            <h5 className="display-5">Dirección de residencia: {factura.cnsctvo_cnsmo.idntfccn_cntrto.drccn}</h5>
                                            <h5 className="display-5">Identificación cliente: {factura.cnsctvo_cnsmo.idntfccn_cntrto.cliente}</h5>
                                            <h5 className="display-5">Valor del KwH: {factura.cnsctvo_trfa.vlr_kwh}</h5>
                                            <h5 className="display-5">Consumo en kwH: {factura.cnsctvo_cnsmo.kwh}</h5>
                                            <h5 className="display-5">Valor consumo: {factura.vlr_cnsmo}</h5>
                                            <h5 className="display-5">Valor interés mora: {factura.vlr_intrss_mra}</h5>
                                            <h5 className="display-5">Valor de reconexión: {factura.vlr_rcnxn}</h5>
                                            <h3 className="display-5" style={{ color: "red" }}>Total a pagar: {factura.vlr_ttl}</h3>
                                            <Barcode value={factura.vlr_ttl} />,
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            
                            {this.mostratBotonPago()}
                        </div>
                    </div>
                    <br></br>
                </React.Fragment>
            )
        }
        else { return null }
    }

    onChange = (e) => {
        this.setState({
            buscador: e.target.value.toLowerCase()
        })
        //this.buscador(e.target.value.toLowerCase());
    }

    default = (e) => {
        e.preventDefault();
    }

    render() {
        return (
                <div>
                <Encabezado
                    titulo="Panel de pagos de bancos"
                    descripcion="Este es el panel de pagos de bancos"
                />
                
                <div className="container" style={{ justifyContent: "center", marginTop: "20px" }}>
                    <form method="POST" onSubmit={(event) => this.handleConsultarFactura(event, this.state.buscador)} className="needs-validation" noValidate>
                        <div className="form-row justify-content-between">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: "10px" }}>
                                <div className="input-group">
                                    <input type="text" className="form-control" name="buscador" value={this.state.buscador} onChange={this.onChange} autoComplete="off" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required></input>
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
                                <button className="btn btn-success" type="submit" onClick={this.verDatos}>Buscar</button>
                            </div>
                            <div className="alert alert-success col-md-6">
                                Resultado:
                                <strong> {this.state.resultado} factura(s) encontrada(s).</strong>

                            </div>
                            {/*  {this.mostrarTable()} */}
                        </div>
                    </form>
                    {this.mostrarInfoFactura()}
                    {this.mostrarForPago()}


                </div>
                </div>
            
        );
    }
}

export default withTranslation()(PagosOperario);