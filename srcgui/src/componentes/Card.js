import React from 'react'
import { useTranslation } from 'react-i18next';
function Card(props) {

 const{titulo, descripcion, urlRuta, d1, d2, d3, d4} = props;
 const i18n = useTranslation();

   return(
      <div className="col-lg-4 col-sm-4">
         <div className="card">
            <div className="card-body">
               <div style={{marginBottom: "10px"}}>
                  <svg className="bi bi-file-earmark-arrow-down" width="50px" height="50px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d={d1}/>
                     <path d={d2}/>
                     <path fillRule="evenodd" d={d3} clipRule="evenodd"/>
                     <path fillRule="evenodd" d={d4} clipRule="evenodd"/>
                  </svg>
               </div>
               <h5 className="card-title">{i18n.t(titulo)}</h5>
               <p className="card-text">{i18n.t(descripcion)}</p>
               <a className="btn btn-success" href="#" role="button" onClick={() => window.location = urlRuta}> {i18n.t('homepage.button-homepage.button_clkh')} &raquo;</a>
            </div>
         </div>
      </div>
     )
}

export default Card;