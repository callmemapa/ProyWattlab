import React, { Component } from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import { Chart } from "react-google-charts";
import Reportes from '../componentes/Reportes';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService();

class MAReportes extends Component {
    
    state = { datos: [] };
    
    componentDidMount() {
        this.subInfo();
    }

    subInfo = async () => {
        solicitudBack.getReporte()
            .then(res => {
                this.setState({
                    datos: res
                })
            })
    }

    render() {    
        return (
            <Layout className="layout" style={{backgroundColor: "white"}}>
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{ display: 'flex', maxWidth: 900 }}>
                    <Reportes
                    reporte={this.state.datos}
                    />
                </div>
            </Layout>
            
        );
    }

}

export default MAReportes;