import React from 'react'
import { useTranslation } from 'react-i18next';

function Encabezado(props) {

 const{titulo, descripcion} = props;
 const i18n = useTranslation();
 
    return(
            <div className="container" style={{justifyContent: "center"}}>
                <div className="jumbotron" style={{backgroundColor: "#0f1323", color: "white", marginTop: "10px", textAlign: "center"}}>
                    <div className="container">
                    <h1 className="display-7" style={{ color: "white" }}>{i18n.t(titulo)}</h1>
                    <p className="lead">{i18n.t(descripcion)}</p>
                    </div>
                </div>
            </div>
    );
}

export default Encabezado;