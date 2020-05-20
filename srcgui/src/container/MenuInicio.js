import React, { Component } from 'react'
import Slides from '../componentes/Slides.js';
import Servicio from './Servicio.js';
import Menu from '../componentes/Menu.js';
///PARA DISEÑO 
import { Layout } from 'antd';
import Footer from '../componentes/Footer.js';
import Noticias from './Noticias.js';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService();
const { Content } = Layout;

class MenuInicio extends Component {
    state = {
        datos: []
    }

    componentDidMount() {
        this.enviopubli();

    }

    enviopubli = () => {
        solicitudBack.getListPublicidad()
            .then(res => {
                this.setState({
                    datos: res
                })
            })
    }

    render() {
        return (
            <Layout className="layout">
                <div>
                    <Menu />
                </div>
                <div>
                    <Content style={{ padding: '0 auto', marginTop: '70px' }}>
                        <Slides />
                    </Content>
                </div>
                <div>
                    <Servicio />
                </div>
                <div>
                    <Noticias
                        dato={this.state.datos}
                    />
                </div>
                <div>
                    <Footer />
                </div>
            </Layout>
        );
    }
}

export default MenuInicio;