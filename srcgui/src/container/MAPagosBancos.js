import React from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import PagosBancos from '../componentes/PagosBancos';

function MAPagosBancos() {
    return (
        <Layout className="layout">
            <div>
                <Sidebar/>
            </div>
            <div>
                <PagosBancos/>
            </div>
        </Layout>        
    );
}

export default MAPagosBancos;