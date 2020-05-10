import React, { Component } from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import Maps from '../componentes/Maps'
import Transformador from '../componentes/Transformador';
import alerta from '../componentes/Alertas';


const a = new alerta();

class MATransformadores extends Component {
  
    
      
    render() {
        
        return (
            <Layout className="layout" style={{backgroundColor: "white"}}>
                <div>
                    <Sidebar/> 
                </div>
                <div className="container-fluid" style={{marginTop: "0px", position: "relative"}}>
                    <div className="row">
                        <div className="col-lg-7">
                            <div style={{backgroundColor: "black", margin: "1em"}}>
                                <Maps/>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div style={{margin: "1em 0"}}>
                                <div style={{textAlign: "center", marginBottom: "20px"}}>
                                    <h2>Transformadores y subestaciones</h2>
                                </div>
                                <div className="form-row">
                                    <div className="input-group">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <input style={{textAlign: "center"}} type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="¿Qué desea añadir?"></input>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-6 col-xs-6">
                                            <select className="form-control" id="exampleFormControlSelect1" style={{marginBottom: "10px"}}>
                                                <option>Transformador</option>
                                                <option>Subestación</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6" style={{display: "auto"}}>
                                            <button className="btn btn-success" onClick= {() => a.mostrar()} type="button">Aceptar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Transformador/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            
        );
        
    }
   

}



export default MATransformadores;