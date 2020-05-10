import React from 'react';
import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';

function Configuracion() {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
                titulo = {i18n.t('setting-panel.set_int-title')}
                descripcion = {i18n.t('setting-panel.set_int-description')}
            />
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>{i18n.t('setting-panel.set_val-kwh')}</label>
                        <input type="text" className="form-control" id="valorKWH"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>{i18n.t('setting-panel.set_beg-vald-rate')}</label>
                        <input type="date" className="form-control" id="inicioVigencia"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>{i18n.t('setting-panel.set_end-vald-rate')}</label>
                        <input type="date" className="form-control" id="finVigencia"></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label>{i18n.t('setting-panel.set_obsv')}</label>
                        <input type="text" maxlength="150" className="form-control" id="observaciones"></input>
                    </div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-success" style={{marginBottom: "10px", width: "150px", marginRight: "10px"}}>{i18n.t('setting-panel.set_btn-accept')}</button>
                        <button type="submit" className="btn btn-danger" style={{marginBottom: "10px", width: "150px"}}>{i18n.t('setting-panel.set_btn-cancel')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Configuracion;