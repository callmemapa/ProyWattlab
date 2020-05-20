// ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import alerta from '../componentes/Alertas';

function PagosBancos(props) {
    const i18n = useTranslation();
    const notificaciones = new alerta();
    var titulo = props.h1;
    var nameBtn = props.nameBtn;
    
    //La referencia para poder enfocar
    const myRef = useRef();

    //Los estados, los cuales almacenan los valores de los inputs
    const [pagos, setPagos] = useState({
        idntfccn_bnco: '',
        cnsctvo_fctra: '',
        nmro_unco_idntfccn_usro: '',
        vlr_pgdo: '',
        tp_pgdo: '',
        nmro_trjt: '',
        obsrvcn:''
    })

    // Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    // También me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        myRef.current.focus();
        actualizar();
    }, [props.idRow])

    // Este método actualiza los estados de acuerdo a los props.
    const actualizar = () => {
        setPagos({
            ...pagos,
            id: props.idRow,
            idntfccn_bnco: props.idntfccn_bnco,
            cnsctvo_fctra: props.cnsctvo_fctra,
            nmro_unco_idntfccn_usro: props.nmro_unco_idntfccn_usro,
            vlr_pgdo: props.vlr_pgdo,
            tp_pgdo: props.tp_pgdo,
            nmro_trjt: props.nmro_trjt,
            obsrvcn: props.obsrvcn
        })
    }

    // Cada vez que se escriba en un input el valor se almacena en los estados.
    const onChange = e => {
        setPagos({
            ...pagos,
            [e.target.name]: e.target.value

        })
        //console.log(pagos)
    }

    return(
        <div className="container">
            <br /><br /><br /><br /><br />
            <h1 className="text-center">{i18n.t(titulo)}</h1>
            <br /><br /><br />
            <form onSubmit={(event) => props.onSubmit(event, pagos)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputTipoPago">Tipo pago</label>
                        <select name="tp_pgdo" onChange={onChange} id="inputTipoPago" value={pagos.tp_pgdo} className="custom-select">
                            <option defaultValue>--</option>
                            <option>Efectivo</option>
                            <option>Tarjeta crédito</option>
                            <option>Tarjeta débito</option>                     
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputConsctFactura">N° Consecutivo factura</label>
                        <input name="cnsctvo_fctra" onChange={onChange} ref={myRef} value={pagos.cnsctvo_fctra} className="form-control" id="inputConsctFactura" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputValorPagado">Valor pagado</label>
                        <input name="vlr_pgdo" type="number" step="0.001" placeholder="Ejemplo: 9,500" onChange={onChange} value={pagos.vlr_pgdo} className="form-control" id="inputValorPagado" required/>
                    </div> 
                    <div className="form-group col-md-6">
                        <label htmlFor="inputIdentfBanco">Lista bancos</label>
                        <select name="idntfccn_bnco" onChange={onChange} id="inputIdentfBanco" value={pagos.idntfccn_bnco} className="custom-select">
                            <option defaultValue>---</option>
                            {props.dato.map(banco=>(
                                <option key={banco.id} value={banco.id}>{banco.nmbre_bnco}</option>
                            ))}                                   
                            {/*<option>Banco popular</option>
                            <option>Bancolombia</option>
                            <option>Banco de Bogota</option>*/}                                  
                        </select>
                    </div>                   
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputNumTarjeta">Nº Tarjeta</label>
                        <input name="nmro_trjt" onChange={onChange} value={pagos.nmro_trjt} className="form-control" id="inputNumTarjeta" required></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputObservacion">Observación</label>
                        <input name="obsrvcn" onChange={onChange} value={pagos.obsrvcn} className="form-control" id="inputObservacion" required/>
                    </div>    
                </div>
                <br />
                <div className="form-row">
                    <button type="submit" className="btn btn-primary mx-auto d-block col-md-5" >{i18n.t(nameBtn)}</button>
                    <button onClick={props.cancelar} className="btn btn-danger mx-auto d-block col-md-5">{i18n.t('payments-panel.pay_btn-cancel')}</button>
                </div>
                <br />                           
            </form>      
        </div>      
    )
}

export default PagosBancos;