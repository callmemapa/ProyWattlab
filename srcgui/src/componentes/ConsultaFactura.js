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
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FacturaPrueba from './FacturaPrueba';
import jsPDF from 'jspdf'
const solicitudBack = new BackService();
const element = <MAFactura/>

class ConsultaFactura extends Component {
    myRef = React.createRef();
    
    state = {
        banderaVer: false,
        id: 2,
        cnsctvo_cnsmo: {
          id: '',
          kwh: '',
          prdo_cnsmo: '',
          obsrvcn: '',
          idntfccn_cntrto: {
              id: '',
              estrt_scl: '',
              drccn: '',
              estado: '',
              cliente: ''
          }
      },
      cnsctvo_trfa: {
          id: '',
          vlr_kwh: '',
          inco_vgca: '',
          obsrvcn: '',
          estdo: ''
      },
      vlr_cnsmo: '',
      vlr_intrss_mra: '',
      vlr_rcnxn: '',
      vlr_ttl: '',
      fcha_lmte_pgo: '',
      cntdd_fctrs_pndts: '',
      fcha_crte_srvco: '',
      obsrvcn: '',
      estado: '',
        datos: [],
        buscador: '',
        resultado: '',
        //mode: ''
    }

    /*constructor(props) {
        super(props);
        this.handleFact = this.handleFact.bind(this);
    }*/

    handleConsultarFactura = async (e, contrato) => {
        e.preventDefault()
        //console.log(publicidad)
        solicitudBack.postFactura({"contrato":contrato}
        ).then(res => {
            console.log(res)
            this.setState({
                datos: res,
                id: contrato,
                resultado: res.length,
                vlr_cnsmo: 14500
            })
            this.mostrarFactura()
            //notificaciones.exito()
        })
            .catch(error => {
                console.log(error)
                this.setState({
                    datos: [],
                    resultado: 0
                })
                //notificaciones.error()
            })
    }

    verDatos = () => {
        {console.log(this.state.banderaVer)}
        this.setState({
            banderaVer:true,
        })
    }

    async componentDidMount() {
        this.verDatos()
    }

    verFactura = () => {
        this.setState({
            banderaVer:true,
            //mode: 'fact'
        })
    }


    async componentDidMount() {
        
    }

    cerrarFactura = () => {
        console.log('holaaa x2')
        this.setState({
            banderaVer: false,
        })
    }

    mostrarFactura() {
       /* if (this.state.banderaVer === true) {
            window.open(<Factura/>, '_blank', 'toolbar=0,location=0,menubar=0');
            return (
            //<div><a target="_blank" href="/ModuloAdministrador/Factura">Click aquí para ver tu factura</a></div>
            <Router>
                <Link target="_blank" to="/ModuloAdministrador/FacturaPDF">PDF</Link>
                <Route exact path="/ModuloAdministrador/FacturaPDF" 
                    render={()=>{
                        return (
                            <div>
                                <Factura 
                                    vlr_cnsmo='5'
                                    periodoConsumo="ENERO"
                                />
                                <ModificarUse/>
                            </div>
                        )
                    }}>
                </Route>
            </Router>)
            
        } else {
            return null
        }*/
        if(this.state.banderaVer === true) {
            {console.log(this.state.banderaVer)}
        return (
            
            <Factura/>
        )}
        else {
            return  <Factura/>
        }
    }

    /*handleFact() {
        this.setState({ mode: 'fact' });
    }

    renderInputSelection() {
        if (this.state.mode === 'fact') {
          return (<div style={{ marginBottom: "20px" }}>
              <Factura/>
          </div>);
        } else {
          return (
              <Factura/>
          )
        }
      }*/

    validar = () => {
        if(this.state.banderaVer === true) {
            this.mostrarFactura()
        }
    }

    mostrarTable = () => {
        return (
            <React.Fragment>
                <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                    <Table t1='Id' t2='Valor consumo' t3='Valor mora' t4='Valor reconexión' t5='Valor a pagar' t6='Fecha pago' t7='Fecha corte' t8='Visualizar' tabla='factura' datos={this.state.datos} verFactura={this.verFactura}/>
                </div>
            </React.Fragment>
        )
    }

    generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        var idFactura = ("ID Factura: "+this.state.id);
        var valorConsumo = ("Valor consumo: "+this.state.vlr_cnsmo);
        var valorMora = ("Valor mora: "+this.state.vlr_intrss_mra);
        var valorReconexion = ("Valor reconexión: "+this.state.vlr_rcnxn);
        var valorTotal = ("Valor total: "+this.state.vlr_ttl);
        
        doc.text(100, 40, 'FACTURA DE SERVICIOS PÚBLICOS')
        
        doc.setFont('helvetica')
        doc.setFontType('normal')
        doc.text(40, 60, idFactura)
        doc.text(40, 80, valorConsumo)
        doc.text(40, 100, valorMora)
        doc.text(40, 120, valorReconexion)
        doc.text(40, 140, valorTotal)
      
        doc.setFont('helvetica')
        doc.setFontType('normal')    
      
        doc.save('Factura.pdf')
    }

    mostrarInfoFactura = () => {
       if (this.state.banderaVer === true) {
            return (
                <React.Fragment>
                    <div className="jumbotron" >
                        <div className="container">
                            <div className="form-row" style={{textAlign: "center"}}>
                                <div className="form-group col-md-12">
                                <svg class="bi bi-file-text" width="8em" height="8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 015 10h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 8h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 4h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                                </svg>
                                </div>
                                <div className="form-group col-md-12">
                                    {this.state.datos.map(factura => (
                                        <div>
                                            <h3 className="display-5">ID factura: {this.state.id}</h3>
                                            <h3 className="display-5">Periodo Consumo: {factura.cnsctvo_cnsmo.prdo_cnsmo}</h3>
                                            <h3 className="display-5">ID contrato: {factura.cnsctvo_cnsmo.idntfccn_cntrto.id}</h3>
                                            <h3 className="display-5">Estrato socioeconómico: {factura.cnsctvo_cnsmo.idntfccn_cntrto.estrt_scl}</h3>
                                            <h3 className="display-5">Dirección: {factura.cnsctvo_cnsmo.idntfccn_cntrto.drccn}</h3>
                                            <h3 className="display-5">Cliente: {factura.cnsctvo_cnsmo.idntfccn_cntrto.cliente}</h3>
                                            <h3 className="display-5">Valor KwH: {factura.cnsctvo_trfa.vlr_kwh}</h3>
                                            <h3 className="display-5">Consumo en kwH: {factura.cnsctvo_cnsmo.kwh}</h3>
                                            <h3 className="display-5">Valor consumo: {factura.vlr_cnsmo}</h3>
                                            <h3 className="display-5">Valor interés mora: {factura.vlr_intrss_mra}</h3>
                                            <h2 className="display-5">Total a pagar: {factura.vlr_ttl}</h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                            <div className="form-row">
                            <button type="submit" target="_blank" onClick={this.generatePDF} className="btn btn-primary mx-auto d-block col-md-5" >Download PDF</button>
                            <button name="cancelar" className="btn btn-danger mx-auto d-block col-md-5">Pagar online</button>
                        </div>
                    </div>
                    <br></br>
                </React.Fragment>
            )
        }
        else {return null}
    }

    onChange = (e) => {
        this.setState({
            buscador: e.target.value.toLowerCase()
        })
        //this.buscador(e.target.value.toLowerCase());
    }

    onKeyPressed = (e) => {
        if (e.keyCode === 8) {
           // this.solicitud()
        }
    }

    buscador = (numero) => {
        const datosNuevos = this.state.datos.filter(function (fila) {
            if (fila.contrato.toLowerCase().indexOf(numero) !== -1) {
                return fila;
            } else if (fila.id.toLowerCase().indexOf(numero) !== -1) {
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
            <Layout className="layout" style={{ backgroundColor: "white" }}>
                <div>
                    <Menu />
                </div>
                <div style={{ marginTop: "70px", marginLeft: "0px", marginRight: "0px" }}>
                    <img className="img-fluid" alt="Responsive image" src='../imagenes/ConsultaFactura.jpg' />
                </div>
                <div className="container" style={{ justifyContent: "center", marginTop: "20px" }}>
                    <form method="POST" onSubmit={(event) => this.handleConsultarFactura(event,this.state.buscador)} className="needs-validation" noValidate>
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
                    {/*this.mostrarFactura()*/}
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(ConsultaFactura);