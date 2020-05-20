import React from 'react';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import Usuarios from '../componentes/Usuarios';

function MAUsers() {
    return (
        <Layout className="layout">
            <div>
                <Sidebar />
            </div>
            <div>
                <Usuarios />
            </div>
        </Layout>
    );
}

export default MAUsers;