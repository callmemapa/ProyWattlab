import React from 'react';
import { useTranslation } from 'react-i18next';

function Transformador() {
    const i18n = useTranslation();
    return (
        <div className="container">
            <form>
                <div className="form-row"> 
                    <div className="form-group col-md-12" style={{textAlign: "center"}}>
                        <h4>{i18n.t('actives-panel.actives-panel-transformer.act_create-trfm')}</h4>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_sub-trfm')}</label>
                        <select id="listaSubestacion" className="form-control">
                            <option defaultValue>Subestación 1 </option>
                            <option>Subestación 2</option>
                            <option>Subestación 3</option>
                            <option>Subestación 4</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_grp-cnt-trfm')}</label>
                        <select id="grupoConexion" className="form-control">
                            <option defaultValue>Estrella</option>
                            <option>Triangulo</option>
                            <option>Zigzag</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_vprmy-trfm')}</label>
                        <input type="text" className="form-control" id="tensionPrimaria"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_vmax-trfm')}</label>
                        <input type="text" className="form-control" id="tensionMaxima"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_vsecond-trfm')}</label>
                        <input type="text" className="form-control" id="tensionSecundaria"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_npw-trfm')}</label>
                        <input type="text" className="form-control" id="potenciaNominal"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_nity-trfm')}</label>
                        <input type="text" className="form-control" id="intensidadNominal"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_scvltg-trfm')}</label>
                        <input type="text" className="form-control" id="tensionCortocircuito"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_rt-trfm')}</label>
                        <input type="text" className="form-control" id="relacionTransformador"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-transformer.act_lctn-trfm')}</label>
                        <button type="submit" id="seleccionEnMapa" className="btn btn-danger btn-block">
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