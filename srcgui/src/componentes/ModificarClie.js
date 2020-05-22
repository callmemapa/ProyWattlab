import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ModificarClie(props) {
    const i18n = useTranslation();
    var titulo = props.h1;
    var nameBtn = props.nameBtn;
    //La referencia para poder enfocar
    const myRef = useRef();
    const myRef2 = useRef();

    //Para inactivar o activar tomar el id del cliente, el estado, y el profile vacio, 
    //Para modificar crear un segundo estado con el id, nmro_idntfccn, prmr_nmbre, prmr_aplldo, email, tpo_idntfcn

    //Los estados, los cuales almacenan los valores de los inputs
    const [cliente, setCliente] = useState({
        id: '',
        prmr_nmbre: '',
        prmr_aplldo: '',
        nmro_idntfccn: '',
        fcha_ncmnto: '',
        tpo_idntfcn: '2',
        tpT_clnte: '',
        contrato: {
            estrt_scl: '',
            drccn: ''
        },
    })

    //Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    //Tambien me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        if (props.id === 'Nuevo' || props.id === 'Modificar') {
            myRef.current.focus();
            actualizar();
        } else if (props.id === 'Crear' || props.id==='ModificarCont') {
            myRef2.current.focus();
            actualizar();
        }
    }, [props.id, props.focus, props.nombre])

    //Este metodo actualiza los estados de acuerdo a los props.
    const actualizar = () => {
        setCliente({
            ...cliente,
            id: props.idRow,
            nmro_idntfccn: props.numeroIdent,
            prmr_nmbre: props.nombre,
            prmr_aplldo: props.apellido,
            fcha_ncmnto: props.fechaNa,
            tpo_idntfcn: props.tipoIdent,
            tpT_clnte: props.tipoClient,
            contrato: {
                estrt_scl: props.estrato,
                drccn: props.direccion
            },
        })
    }

    //Cada vez que se escriba en un input el valor se almacena en los estados
    const onChange = e => {

        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        })

        if (e.target.name === 'estrt_scl' || e.target.name === 'drccn') {
            setCliente({
                ...cliente,
                contrato: {
                    ...cliente.contrato,
                    [e.target.name]: e.target.value,
                    [e.target.name]: e.target.value
                }
            })
        }
        console.log(cliente)
    }

    const mostrarTipoIdent = () => {
        if (props.tipoIdent === 1) {
            return (
                <p class="lead">C.C: {props.numeroIdent}</p>
            )
        }
        if (props.tipoIdent === 2) {
            return (
                <p class="lead">NIT:  {props.numeroIdent}</p>
            )
        }
        if (props.tipoIdent === 3) {
            return (
                <p class="lead">C.E: {props.numeroIdent}</p>
            )
        } else {
            return (
                <td>nada</td>
            )
        }
    }

    const mostrarTipoCliente = () => {
        if (props.tipoClient === 1) {
            return (
                <p class="lead">{i18n.t('customers-panel.cst_type-cstn')}</p>

            )
        }
        if (props.tipoClient === 2) {
            return (
                <p class="lead">{i18n.t('customers-panel.cst_type-cstj')}</p>
            )
        }
        else {
            return (
                <td>nada</td>
            )
        }
    }

    const mostrarCliente = () => {
        if (props.id === 'Nuevo' || props.id === 'Modificar') {

            {console.log(cliente.tpo_idntfcn)}
            return (
                <React.Fragment>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTipoIdent">{i18n.t('customers-panel.cst_type-id')}</label>
                            <select onChange={onChange} ref={myRef} value={cliente.tpo_idntfcn} name="tpo_idntfcn" id="inputTipoIdent" className="custom-select" required>
                                <option ></option>
                                <option value="1">C.C</option>
                                <option value="2">NIT</option>
                                <option value="3">C.E</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputIdent">{i18n.t('customers-panel.cst_id-num')}</label>
                            <input required name="nmro_idntfccn" onChange={onChange} type="text" value={cliente.nmro_idntfccn} className="form-control" id="inputIdent" />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">{i18n.t('customers-panel.cst_first-name')}</label>
                            <input required name="prmr_nmbre" onChange={onChange} type="text" value={cliente.prmr_nmbre} className="form-control" id="inputNombre" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">{i18n.t('customers-panel.cst_last-name')}</label>
                            <input required name="prmr_aplldo" onChange={onChange} type="text" value={cliente.prmr_aplldo} className="form-control" id="inputApellido" />
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFecha">{i18n.t('customers-panel.cst_birth-date')}</label>
                            <input required type="date" name="fcha_ncmnto" onChange={onChange} value={cliente.fcha_ncmnto} className="form-control" id="inputFecha" max="3000-12-31"
                                min="1000-01-01" class="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTipoClient">{i18n.t('customers-panel.cst_type-cst')}</label>
                            <select onChange={onChange} name="tpT_clnte" id="inputTipoClient" value={cliente.tpT_clnte} className="custom-select" >
                                <option defaultValue>--</option>
                                <option value="1">{i18n.t('customers-panel.cst_type-cst-nat')}</option>
                                <option value="2">{i18n.t('customers-panel.cst_type-cst-jud')}</option>
                            </select>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
    const mostrarInfoClient = () => {
        if (props.id === 'Crear') {
            return (<div className="jumbotron jumbotron-fluid" >
                <div className="container">
                    <h1 className="display-4">{i18n.t('customers-panel.cst_title-cst')}: {props.nombre.toUpperCase() + ' ' + props.apellido.toUpperCase()}</h1>
                    {mostrarTipoIdent()}
                    {mostrarTipoCliente()}

                </div>
            </div>)
        }
    }
    const mostrarContrato = () => {
        {console.log(props.direccion)}
        if (props.id === 'Nuevo' || props.id === 'Crear' || props.id=== 'ModificarCont') {
            return (
                <React.Fragment>

                    {mostrarInfoClient()}

                    <h2>{i18n.t('customers-panel.cst_contract-title')}</h2>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTipoIdent">{i18n.t('customers-panel.cst_type-soc')}</label>
                            <select onChange={onChange} name="estrt_scl" value={cliente.contrato.estrt_scl} id="inputTipoIdent" className="custom-select" ref={myRef, myRef2} required >
                                <option ></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>

                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputDire">{i18n.t('customers-panel.cst_adress-resd')}</label>
                            <input required name="drccn" onChange={onChange} type="text" value={cliente.contrato.drccn} className="form-control" id="inputDire" required/>
                        </div>

                    </div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }

    const validar = (event) => {
        event.preventDefault();
        if (props.id === 'Nuevo') {
            props.onSubmit(event, cliente)
        }else if(props.id==='Crear'){
            props.onSubmit(event,{"estrt_scl": cliente.contrato.estrt_scl,
                                    "drccn": cliente.contrato.drccn,
                                    "cliente":props.idRow})
        }else if(props.id==='Modificar')  {
            props.onSubmit(event,{"id": cliente.id,
            "nmro_idntfccn": cliente.nmro_idntfccn,
            "prmr_nmbre": cliente.prmr_nmbre,
            "prmr_aplldo": cliente.prmr_aplldo,
            "tpo_idntfcn": cliente.tpo_idntfcn,
            "tpT_clnte": cliente.tpT_clnte})
        }else if (props.id==='ModificarCont'){
            props.onSubmit(event, {"id":cliente.id,
            "estrt_scl":cliente.contrato.estrt_scl,
            "drccn":cliente.contrato.drccn}
            )
        }
    }

    return (
        <div className="container">
            <br /><br />
            <h1 className="text-center">{i18n.t(titulo)}</h1>
            <br />
            <form method="POST" onSubmit={(event) => validar(event)}>
                {mostrarCliente()}
                {mostrarContrato()}
                <br /><br />
                <div className="form-row">
                    <button type="submit" className="btn btn-primary mx-auto d-block col-md-5" >{i18n.t(nameBtn)}</button>
                    <button onClick={props.cancelar} name="cancelar" className="btn btn-danger mx-auto d-block col-md-5">{i18n.t('users-panel.usr_btn-cancelar')}</button>
                </div>
            </form>
            <br /><br />
        </div>
    )
}

export default ModificarClie

