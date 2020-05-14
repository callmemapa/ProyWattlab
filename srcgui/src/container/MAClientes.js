import React from 'react'
import Sidebar from  '../componentes/Sidebar'
import { Layout } from 'antd';
import Clientes from '../componentes/Clientes'

function MAClientes (){


        return (

            <Layout className="layout">
            <div>
                <Sidebar/>
            </div>
            <div>
                hola
                {console.log('hola')}
                <Clientes/>
            </div>
        </Layout>
        )

}

export default MAClientes
