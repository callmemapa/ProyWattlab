import React from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import PagosClientes from '../componentes/PagosClientes';

function MAPagosBancos() {
    return (
        <Layout className="layout">
            <div>
                <Sidebar/>
            </div>
            <div>
                <PagosClientes/>
            </div>
        </Layout>        
    );
}

export default MAPagosBancos;