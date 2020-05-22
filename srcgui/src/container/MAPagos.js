import React, { Component } from 'react';
import i18n from '../i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import PagosOperario from '../componentes/PagosOperario';

class MAPagos extends Component {

    render() {

        return (
            <Layout className="layout">
                <div>
                    <Sidebar />
                </div>
                <div style={{ backgroundColor: "white"}}>
                    <PagosOperario/>
                </div>
            </Layout>

        );
    }

}

export default MAPagos;