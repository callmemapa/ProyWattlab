import React from 'react';
import { useTranslation } from 'react-i18next';
import CardNoticia from '../componentes/CardNoticia';

function Noticias() {
    const i18n = useTranslation();
    return (
        <div className="container" style={{ marginTop: '15px', marginBottom: "20px", textAlign: "center"}}>
            <div style={{marginBottom: "20px", marginTop: "20px"}}>
                <h1>{i18n.t('homepage.news-homepage.news_title')}</h1>
            </div>
            <div>
                <p>{i18n.t('homepage.news-homepage.news_description')}</p>
            </div>
        </div>
    )
}

export default Noticias;