import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

function BotonCrear(props) {
    const i18n = useTranslation();
    return (
        <button type="button" onClick={props.crearContrato} className="btn btn-primary" style={{ marginBottom: "10px", width: "130px" }}>
            <svg className="bi bi-layout-text-window-reverse" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5z" clip-rule="evenodd" />
            </svg>
                &nbsp; Crear
            {/*{i18n.t('users-panel.usr_btn-create')}*/}
        </button>
    );
}

export default BotonCrear;