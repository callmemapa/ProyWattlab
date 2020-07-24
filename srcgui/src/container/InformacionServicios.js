import React from 'react';
import Menu from '../componentes/Menu';
import { Layout } from 'antd';
import Footer from '../componentes/Footer.js';

class InformacionServicios extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <div>
                    <Menu />
                </div>
                <div>
                    <h1>Aquí va la información de los servicios</h1>
                </div>
                <div>
                    <Footer />
                </div>
            </Layout>
        );
    }
}

export default InformacionServicios;