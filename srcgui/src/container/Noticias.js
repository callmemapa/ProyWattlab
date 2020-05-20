import React from 'react';
import { useTranslation } from 'react-i18next';
import CardNoticia from '../componentes/CardNoticia';

function Noticias(props) {
    const i18n = useTranslation();

    return (
        <div className="container" style={{ marginTop: '15px', marginBottom: "20px", textAlign: "center" }}>
            <div style={{ marginBottom: "10px", marginTop: "20px" }}>
                <h1>{i18n.t('homepage.news-homepage.news_title')}</h1>
            </div>
            <div className="row" >
                <div className="col" >
                    {props.dato.map(fila => {
                        if (fila.estado === true) {
                            return (
                                <CardNoticia
                                    key={fila.id}
                                    imagen={fila.url}
                                    titulo={fila.titulo}
                                    descripcion={fila.descripcion}
                                />
                            )
                        }
                    })}

                </div>
            </div>
        </div>

    )
}

export default Noticias;
/*<div className="row">
<CardNoticia
imagen="../imagenes/slides/Cali.jpg"
    titulo='homepage.bill-homepage.bill_title'
    descripcion='homepage.bill-homepage.bill_description'
    />
</div>*/