import React from 'react';
import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';

function PagosClientes() {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
                titulo = {i18n.t('payments-panel.pay_int-title')}
                descripcion = {i18n.t('payments-panel.pay_int-description')}/>
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label># Referencia factura</label>
                        <input type="text" className="form-control" id="consecutivoFactura"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Fecha de pago</label>
                        <input type="date" className="form-control" id="fechaPago"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Fecha vencimiento</label>
                        <input type="date" value="2020-07-22" className="form-control" id="fechaVencimiento"></input>
                    </div>
                    <div className="form-group col-md-3">
                        <label>{i18n.t('payments-panel.pay_pay-type')}</label>
                        <select id="formaPago" className="form-control">
                            <option defaultValue>--</option>
                            <option>{i18n.t('payments-panel.pay_pay-type-cash')}</option>
                            <option>{i18n.t('payments-panel.pay_pay-type-btransfer')}</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label>{i18n.t('payments-panel.pay_val-paid')}</label>
                        <input type="text" className="form-control" id="valorPagado"></input>
                    </div>
                    <div className="form-group col-md-3">
                        <label>{i18n.t('payments-panel.pay_slt-bank')}</label>
                        <select id="idBanco" className="form-control">
                            <option defaultValue>--</option>
                            <option>{i18n.t('payments-panel.pay_slt-bank-b1')}</option>
                            <option>{i18n.t('payments-panel.pay_slt-bank-b2')}</option>
                            <option>{i18n.t('payments-panel.pay_slt-bank-b3')}</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label>{i18n.t('payments-panel.pay_bill-state')}</label>
                        <input placeholder={i18n.t('payments-panel.pay_bill-state-generated')} type="text" className="form-control" id="estadoFactura" disabled></input>
                    </div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-success" style={{marginBottom: "10px", width: "150px", marginRight: "10px"}}>{i18n.t('payments-panel.pay_btn-save')}</button>
                        <button type="submit" className="btn btn-danger" style={{marginBottom: "10px", width: "150px"}}>{i18n.t('payments-panel.pay_btn-cancel')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagosClientes;