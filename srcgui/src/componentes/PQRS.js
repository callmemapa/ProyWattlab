import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
import Footer from './Footer';
import Menu from './Menu';

import BackService from '../store/PeticionesBack'; //CENTRALIZACION DE LAS SOLICITUDES
const solicitudBack = new BackService();

const handleFormSubmit = e => {
    e.preventDefault();
    
    solicitudBack.postPQRS({ //Envio de datos al back
        "asunto": e.target.elements.asunto.value,
        "contenido": e.target.elements.contenido.value,
        "email": e.target.elements.email.value
    }).then(res => console.log(res.data))
      .catch(error => console.log(error))
    
    e.target.elements.asunto.value="";
    e.target.elements.contenido.value="";
    e.target.elements.email.value="";
}

function PQRS() {
    const i18n = useTranslation();

    return (
        <Layout className="layout">
            <div>
                <Menu/>
            </div>
                
            <div style={{marginTop: "70px", marginLeft: "0px", marginRight: "0px"}}>
                <img class="img-fluid" alt="Responsive image" src='../imagenes/Banner.jpg'></img>
            </div>
            
            <div className="container" style={{marginTop: "20px", marginBottom: "50px"}}>
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="col-lg-7" style={{textAlign: "left"}}>
                        <h3>{i18n.t('pqrs_petition')}</h3>
                            <p>{i18n.t('pqrs_petition_text')}</p>
                            
                        <h3>{i18n.t('pqrs_complain')}</h3>
                            <p>{i18n.t('pqrs_complain_text')}</p>
                            
                        <h3>{i18n.t('pqrs_claim')}</h3>
                            <p>{i18n.t('pqrs_claim_text')}</p>
                            
                        <h3>{i18n.t('pqrs_suggestion')}</h3>
                            <p>{i18n.t('pqrs_suggestion_text')}</p>
                    </div>
                    
                    <div className="col-lg-5" style={{marginTop: "20px"}}>
                        <form onSubmit={(event) => handleFormSubmit(event)}>
                            <div>
                                <h3 style={{marginBottom: "20px"}}>{i18n.t('pqrs_send_request')}</h3>
                            </div>
                            
                            <div className="form-group">
                                <input name="asunto" className="form-control" placeholder={i18n.t('pqrs_subject')}></input>
                            </div>

                            <div className="form-group">
                                <input name="email" className="form-control" type="email" placeholder={i18n.t('pqrs_email')}></input>
                            </div>
                            
                            <div>
                                <input name="contenido" className="form-control" placeholder={i18n.t('pqrs_description')} style={{height: "200px", verticalAlign: "top"}}></input>
                            </div>
                            
                            <div style={{marginTop: "20px"}}>
                                <button type="submit" className="btn btn-success btn-block">{i18n.t('send_button')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </Layout>
    );
}

export default PQRS;
