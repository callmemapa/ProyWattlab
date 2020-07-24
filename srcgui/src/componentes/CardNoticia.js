import React from 'react'
import './style/slides.css';

import { useTranslation } from 'react-i18next';

function CardNoticia(props) {
   const { titulo, descripcion, imagen } = props;
   const i18n = useTranslation();

   return (
      <div className="col-lg-3 col-sm-6 col-xs-12" style={{ marginTop: "30px", display: "inline-block", justifyContent: "center", textAlign: "center", cursor: "pointer" }}>
         <div className="card" style={{ width: "230px", marginTop: "10px", marginRight: "10px" }}>
            <div className="card-body">
               <div style={{ marginBottom: "10px" }}>
                  <img src={imagen} className="d-block noticia w-100" ></img>
                  <h5 className="card-title">{titulo}</h5>
                  <p className="card-text">{descripcion}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CardNoticia;