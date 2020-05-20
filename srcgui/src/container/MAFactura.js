import React, { Component } from 'react';
import { Layout } from 'antd';
import Factura from '../componentes/Factura';

class MAFactura extends Component {
    render() {
        return (
            <Layout className="layout">
                <Factura
                    valorConsumo='3000'
                />
            </Layout>
        );
    }
}

export default MAFactura;