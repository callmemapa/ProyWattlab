import React, { Component } from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';

class MADashboard extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "20px", paddingLeft: "60px", paddingRight: "70px", textAlign: "center"}}>
                 
                </div>
            </Layout>
            
        );
    }

}

export default MADashboard;