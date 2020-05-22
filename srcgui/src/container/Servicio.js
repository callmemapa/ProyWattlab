import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Card from '../componentes/Card.js';
import i18n from 'i18next';

class Servicio extends Component {
    render() {
        return(
            <div className="container" style={{ marginTop: '15px', marginBottom: "20px", textAlign: "center" }}>
                <h1>{i18n.t('homepage.services-homepage.svcs_info-titulo')}</h1>
                <div style={{ marginBottom: "20px", marginTop: "20px", textAlign: "justify" }}>
                    <h5>{i18n.t('homepage.services-homepage.svcs_info-descrip')}</h5>
                </div>
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <h1>{i18n.t('homepage.services-homepage.svcs_title')}</h1>
                    <h4>{i18n.t('homepage.services-homepage.svcs_description')}</h4>
                </div>
                <div className="row">
                    <Card
                        d1='M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z'
                        d2='M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z'
                        d3='M5.646 9.146a.5.5 0 01.708 0L8 10.793l1.646-1.647a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 010-.708z'
                        d4='M8 6a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 018 6z'
                        titulo='homepage.bill-homepage.bill_title'
                        descripcion='homepage.bill-homepage.bill_description'
                        urlRuta='/ConsultaFactura' />
                    <Card
                        d1='M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'
                        d3='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'
                        titulo='homepage.pqrs-homepage.pqrs_title'
                        descripcion='homepage.pqrs-homepage.pqrs_description'
                        urlRuta='/PQRS' />
                </div>
            </div>
        )
    }
}

export default withTranslation()(Servicio);