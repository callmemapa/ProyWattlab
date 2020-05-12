import React from 'react';
import { useTranslation } from 'react-i18next';

function Subestacion() {
    const i18n = useTranslation();
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-12" style={{textAlign: "center"}}>
                        <h4>{i18n.t('actives-panel.actives-panel-substation.act_int-create')}</h4>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_name-sub')}</label>
                        <input type="text" className="form-control" id="nombreSubestacion"></input>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_address-sub')}</label>
                        <input type="text" className="form-control" id="direccionSubestacion"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_tel-sub')}</label>
                        <input type="text" className="form-control" id="telSubestacion"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_city-sub')}</label>
                        <input type="text" className="form-control" id="ciudadSubestacion"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">{i18n.t('actives-panel.actives-panel-substation.act_lctn-sub')}</label>
                        <button type="submit" id="seleccionEnMapaSub" className="btn btn-danger btn-block">
                            <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        &nbsp; {i18n.t('actives-panel.actives-panel-substation.act-btn-slt-map-sub')}</button>
                    </div>
                </div>
                <button type="submit" id="añadir" className="btn btn-success btn-block">{i18n.t('actives-panel.actives-panel-substation.act_btn-add-sub')}</button>
            </form>
        </div>
    );
}

export default Subestacion;