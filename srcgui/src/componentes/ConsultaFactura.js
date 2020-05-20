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
const solicitudBack = new BackService();

class ConsultaFactura extends Component {
    myRef = React.createRef();

    state = {
        banderaVer: false,
        id: '',
        vlr_cnsmo: '',
        vlr_intrss_mra: '',
        vlr_rcnxn: '',
        vlr_ttl: '',
        fcha_lmte_pgo: '',
        fcha_crte_srvco: '',
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
                resultado: res.length
            })
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

    mostrarFactura = () => {
        
        if (this.state.banderaVer === true) {
            return (
                <Suspense fallback={<Spinner />}>
                    <Factura />
                    <div>holi</div>
                </Suspense>
            )
        } else {
                return null
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
                                <button className="btn btn-success" type="submit">Buscar</button>
                            </div>
                            <div className="alert alert-success col-md-6">
                                Resultados:
                                <strong> {this.state.resultado} filas encontradas.</strong>

                            </div>
                            {this.mostrarTable()}
                        </div>
                    </form> 
                    {this.mostrarFactura()}
                                    
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(ConsultaFactura);