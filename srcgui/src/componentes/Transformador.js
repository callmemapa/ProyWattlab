import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackService from '../store/PeticionesBack';
import alerta from '../componentes/Alertas';

const solicitudBack = new BackService();
const notificaciones = new alerta();


const submitDatoSub = (e, transf, props) => {

    transf.lngtd = props.longitud
    transf.lttd = props.latitud

    if (transf.lngtd !== '' && transf.grpo_cnxn !== '') {
        solicitudBack.postTransformador(transf)
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

function Transformador(props) {
    const i18n = useTranslation();
    const [transf, setTransf] = useState({
        sub_estcn: '',
        grpo_cnxn: '',
        tnsn_prmra: '',
        tnsn_mxma_srvco: '',
        tnsn_scndra: '',
        ptnca_nmnl: '',
        intnsdd_nmnl_prmra: '',
        tnsn_crto_crcto: '',
        rlcn_trnsfrmcn: '',
        lngtd: '',
        lttd: ''
    })

    const onChange = e => {
        setTransf({
            ...transf,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="container">
            <form onSubmit={(e) => submitDatoSub(e, transf, props)}>
                <div className="form-row">
                    <div className="form-group col-md-12" style={{ textAlign: "center" }}>
                        <h4>{i18n.t('actives-panel.actives-panel-transformer.act_create-trfm')}</h4>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_sub-trfm')}</label>
                        <select name="sub_estcn" className="form-control" onChange={onChange}>
                            <option defaultValue>---------</option>
                            {props.dato.map(subE => (
                                <option key={subE.id} value={subE.id}>{subE.nombre}</option>
                            ))}

                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_grp-cnt-trfm')}</label>
                        <select name="grpo_cnxn" className="form-control" onChange={onChange}>
                            <option defaultValue>Estrella</option>
                            <option  >Triangulo</option>
                            <option  >Zigzag</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_vprmy-trfm')}</label>
                        <input type="text" name="tnsn_prmra" className="form-control" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_vmax-trfm')}</label>
                        <input type="text" name="tnsn_mxma_srvco" className="form-control" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_vsecond-trfm')}</label>
                        <input type="text" name="tnsn_scndra" className="form-control" onChange={onChange}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_npw-trfm')}</label>
                        <input type="text" name="ptnca_nmnl" className="form-control" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_nity-trfm')}</label>
                        <input type="text" name="intnsdd_nmnl_prmra" className="form-control" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_scvltg-trfm')}</label>
                        <input type="text" name="tnsn_crto_crcto" className="form-control" onChange={onChange}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_rt-trfm')}</label>
                        <input type="text" name="rlcn_trnsfrmcn" className="form-control" onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_lctn-trfm')}</label>
                        <button type="button" id="seleccionEnMapa" className="btn btn-danger btn-block">
                            <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        &nbsp; {i18n.t('actives-panel.actives-panel-transformer.act_btn-slt-map-trfm')}</button>
                    </div>
                </div>
                <button type="submit" id="añadir" className="btn btn-success btn-block">{i18n.t('actives-panel.actives-panel-transformer.act_btn-add-trfm')}</button>
            </form>
        </div>
    );
}

export default Transformador;