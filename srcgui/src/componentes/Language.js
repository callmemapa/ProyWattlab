import React from 'react'
import { Translation, useTranslation } from 'react-i18next';

function Language() {
    const { t, i18n } = useTranslation();
    function onLanguajeChange(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <div>
            <button className="btn btn-ligth dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {i18n.t('language.lang_title')}</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href='#'className="dropdown-item" onClick={() => { onLanguajeChange("es") }}>
                    <img height="20px" src="https://img.icons8.com/color/48/000000/colombia.png"/>
                    &nbsp; {i18n.t('language.lang_spanish-title')}</a>
                <a className="dropdown-item" onClick={() => { onLanguajeChange("en") }}>
                    <img height="20px" src="https://img.icons8.com/color/48/000000/usa.png"/>
                    &nbsp; {i18n.t('language.lang_english-title')}</a>
                <a className="dropdown-item" onClick={() => { onLanguajeChange("pt") }}>
                    <img height="20px" src="https://img.icons8.com/color/48/000000/brazil.png"/> 
                    &nbsp; {i18n.t('language.lang_portuguese-title')}</a>
            </div>
        </div>
    )
}

export default Language; 