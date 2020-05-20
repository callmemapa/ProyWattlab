import React, { Component } from 'react';
import i18n from '../i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
//import PagosClientes from '../componentes/PagosClientes';

class MAPagos extends Component {

    render() {

        return (
            <Layout className="layout">
                <div>
                    <Sidebar />
                </div>
                <div className="container" style={{marginTop: "20px", textAlign: "center"}}>
                    {/*<PagosClientes/>*/}
                </div>
            </Layout>

        );
    }

}

export default MAPagos;