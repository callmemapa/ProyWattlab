import React, { useState, useEffect, useRef} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import BackService from '../store/PeticionesBack';
import alerta from '../componentes/Alertas';
const solicitudBack = new BackService();
const notificaciones = new alerta();

const PaymentForm = (props) => {
    
    const myRef = useRef();


    //numero de la tarjeta, 
    //idbanco, valor a pagar, id de la factura, tipo de pago:Debito, 
    //Observacion:nombre usuario 
    const [state, setState] = useState({
        number: '',
        name: '',
        cvc: '',
        expiry: '',
        focus: '',
        banco: [],
        nBanco:''
    })

    useEffect(() => {
        myRef.current.focus();
        submitSub()

    }, [])

    const submitSub = async () => {
        solicitudBack.getBanco()
            .then(res => {
                setState({
                    ...state,
                    banco: res
                })
            })
    }

    const handleFocus = (e) => {
        setState({
            ...state,
            focus: e.target.name
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });

        console.log(state)
    }

    const submitPayment = () => {
        console.log("name => ", state.name)
        console.log("number => ", state.number)
        console.log("expiry => ", state.expiry)
        console.log("cvc => ", state.cvc)
        alert(JSON.stringify(state))
    }


    const validar = (event) =>{
        event.preventDefault()
            props.onSubmit({ 'idntfccn_bnco':state.nBanco,
            'cnsctvo_fctra':props.consFact, 
            'vlr_pgdo':props.valorPagado,
            'tp_pgdo':'Debito',
            'nmro_trjt': state.number,
            'obsrvcn':state.name})
    }

    return (
        <div className="card" >
            <div className="card-body">
                <Cards
                    cvc={state.cvc}
                    expiry={state.expiry}
                    focused={state.focus}
                    name={state.name}
                    number={state.number}
                />
                <form method="POST" onSubmit={(event) => validar(event)}>
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            ref={myRef}
                            type="text"
                            className="form-control"
                            name="number"
                            maxLength="16"
                            placeholder="Número de tarjeta"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="Nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                maxLength="30"
                                placeholder="Nombre"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputIdentfBanco">Lista bancos</label>
                            <select name="nBanco" onChange={handleChange} value={state.nBanco} id="inputIdentfBanco" className="custom-select" required>
                                <option></option>
                                {state.banco.map(banco => (
                                    <option key={banco.id} value={banco.id}>{banco.nmbre_bnco}</option>
                                ))}
                                {/*<option>Banco popular</option>
                            <option>Bancolombia</option>
                            <option>Banco de Bogota</option>*/}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Vencimiento</label>
                            <input
                                type="text"
                                className="form-control"
                                name="expiry"
                                maxLength="4"
                                placeholder="Expiración"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cvc"
                                maxLength="4"
                                placeholder="CVC"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg"
                    >Pagar</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm