import React from 'react';
import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';
import BackService from '../store/PeticionesBack';
import alerta from '../componentes/Alertas';

const solicitudBack = new BackService();
const notificaciones = new alerta();


const handleFormSubmit = e => {
    e.preventDefault();

    if (e.target.elements.valorKWH.value !== '' && e.target.elements.valorKWH.value >= "1,000" && e.target.elements.observs.value !== '') {
        solicitudBack.postTarifa({ //Envio de datos al back
            "vlr_kwh": e.target.elements.valorKWH.value,
            "obsrvcn": e.target.elements.observs.value,
        }).then(res => { notificaciones.exito() })
            .catch(error => { notificaciones.error() })

        e.target.elements.valorKWH.value = "";
        e.target.elements.finVigencia.value = "";
        e.target.elements.observs.value = "";
    } else {
        notificaciones.error()
    }

}

function Configuracion() {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
            <Encabezado
                titulo={i18n.t('setting-panel.set_int-title')}
                descripcion={i18n.t('setting-panel.set_int-description')}
            />
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <div className="container">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>{i18n.t('setting-panel.set_val-kwh')}</label>
                            <input type="number" className="form-control" name="valorKWH" requerid step="0.001" placeholder="ejemplo: 9,500" ></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label>{i18n.t('setting-panel.set_end-vald-rate')}</label>
                            <input type="date" className="form-control" name="finVigencia" requerid></input>
                        </div>
                        <div className="form-group col-md-12">
                            <label>{i18n.t('setting-panel.set_obsv')}</label>
                            <input type="text" maxlength="150" className="form-control" name="observs" requerid placeholder="norma por la cual se aumenta el precio"></input>
                        </div>
                        <div className="col align-self-center">
                            <button type="submit" className="btn btn-success" style={{ marginBottom: "10px", width: "150px", marginRight: "10px" }}>{i18n.t('setting-panel.set_btn-accept')}</button>
                            <button type="reset" className="btn btn-danger" style={{ marginBottom: "10px", width: "150px" }}>{i18n.t('setting-panel.set_btn-cancel')}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Configuracion;