import React from 'react';
import Publicidad from '../componentes/Publicidad';
import Sidebar from  '../componentes/Sidebar'
import { Layout } from 'antd';

function MAPublicidad (){
    
    return (
        <Layout className="layout">
            <div>
                <Sidebar/>
            </div>
            <div>
                <Publicidad/>
            </div>
        </Layout> 
       

    )
    
}

export default MAPublicidad
