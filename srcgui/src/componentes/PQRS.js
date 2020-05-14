import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Empty } from 'antd';
import Footer from './Footer';
import Menu from './Menu';
import alerta from '../componentes/Alertas';

import BackService from '../store/PeticionesBack'; //CENTRALIZACION DE LAS SOLICITUDES
const solicitudBack = new BackService();
const notificaciones = new alerta();


const handleFormSubmit = e => {
    e.preventDefault();

    if (e.target.elements.asunto.value !== "") {
        solicitudBack.postPQRS({ //Envio de datos al back
            "asunto": e.target.elements.asunto.value,
            "contenido": e.target.elements.contenido.value,
            "email": e.target.elements.email.value
        }).then(res => {
            notificaciones.exito()
            console.log(res)
            
        }).catch(error => {
                console.log(error)
                notificaciones.error()

            })
        e.target.asunto.value = ""
        e.target.contenido.value = ""
        e.target.email.value = ""
    }
}

function PQRS() {
    const i18n = useTranslation();
    return (
        <Layout className="layout">
            <div>
                <Menu />
            </div>

            <div className="navbar-header" style={{ marginTop: "70px", marginLeft: "0px", marginRight: "0px" }}>
                <img className="img-fluid" alt="Responsive image" src='../imagenes/Banner.jpg'></img>
            </div>

            <div className="container" style={{ marginTop: "20px", marginBottom: "50px" }}>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-lg-7" style={{ textAlign: "left" }}>
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_ptn-title')}</h3>
                        <p>{i18n.t('homepage.pqrs-homepage.pqrs_ptn-description')}</p>
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_cmpn-title')}</h3>
                        <p>{i18n.t('homepage.pqrs-homepage.pqrs_cmpn-description')}</p>
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_clm-title')}</h3>
                        <p>{i18n.t('homepage.pqrs-homepage.pqrs_clm-description')}</p>
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_sgtn-title')}</h3>
                        <p>{i18n.t('homepage.pqrs-homepage.pqrs_sgtn-description')}</p>
                    </div>
                    <div className="col-lg-5" style={{ marginTop: "20px" }}>
                        <form onSubmit={(event) => handleFormSubmit(event)}>
                            <div>
                                <h3 style={{ marginBottom: "20px" }}>{i18n.t('homepage.pqrs-homepage.pqrs_submrq-description')}</h3>
                            </div>
                            <div className="form-group">
                                <input name="asunto" className="form-control" placeholder={i18n.t('homepage.pqrs-homepage.pqrs_sbjt-title')} required></input>
                            </div>
                            <div className="form-group">
                                <input name="email" className="form-control" type="email" placeholder={i18n.t('homepage.pqrs-homepage.pqrs_email-title')} required></input>
                            </div>
                            <div>
                                <input name="contenido" className="form-control" placeholder={i18n.t('homepage.pqrs-homepage.pqrs_dcptn-title')} style={{ height: "200px", verticalAlign: "top" }} required></input>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <button type="submit"  className="btn btn-success btn-block">{i18n.t('homepage.pqrs-homepage.pqrs_btn-subm')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </Layout>
    );
}

export default PQRS;
