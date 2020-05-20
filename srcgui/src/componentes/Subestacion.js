import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackService from '../store/PeticionesBack';
import alerta from '../componentes/Alertas';

const solicitudBack = new BackService();
const notificaciones = new alerta();

const submitDatoSub = (e, subE, props) => {
    //ASIGNACION DE LATITUD Y LONGITUD
    subE.lngtd = props.longitud
    subE.lttd = props.latitud
    if (subE.lngtd !== '' && subE.nombre !== '') {
        solicitudBack.postSubestacion(subE)
            .then(res => {
                console.log('Realizado')
                notificaciones.exito()
            }) //ALERTA DE EXITO
            .catch(error => {
                console.log('falla')
                notificaciones.error()
            })//ALERTA DE ERROR 
    }
}

function Subestacion(props) {
    const i18n = useTranslation();

    const [subE, setSubE] = useState({
        nombre: '',
        drccn: '',
        tlfno: '',
        lngtd: '',
        lttd: ''
    })


    const onChange = e => {
        setSubE({
            ...subE,
            [e.target.name]: e.target.value,
        })
    }




    return (
        <div className="container">
            <form onSubmit={(e) => submitDatoSub(e, subE, props)}>
                <div className="form-row">
                    <div className="form-group col-md-12" style={{ textAlign: "center" }}>
                        <h4>{i18n.t('actives-panel.actives-panel-substation.act_int-create')}</h4>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_name-sub')}</label>
                        <input type="text" className="form-control" name="nombre" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_address-sub')}</label>
                        <input type="text" className="form-control" name="drccn" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_tel-sub')}</label>
                        <input type="text" className="form-control" name="tlfno" onChange={onChange}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_lctn-sub')}</label>
                        <button type="button" id="seleccionEnMapaSub" className="btn btn-danger btn-block">
                            <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        &nbsp; {i18n.t('actives-panel.actives-panel-substation.act-btn-slt-map-sub')}</button>
                    </div>
                    <button type="submit" id="añadir" className="btn btn-success btn-block">{i18n.t('actives-panel.actives-panel-substation.act_btn-add-sub')}</button>
                </div>
            </form>
        </div>
    );
}

export default Subestacion;