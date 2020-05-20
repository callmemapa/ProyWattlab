import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService();

const PaymentForm = (props) => {

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
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            maxLength="16"
                            placeholder="Número de tarjeta"
                            onChange={handleChange}
                            onFocus={handleFocus}
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
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputIdentfBanco">Lista bancos</label>
                            <select name="nBanco" onChange={handleChange} value={state.nBanco} id="inputIdentfBanco" className="custom-select">
                                <option defaultValue>---</option>
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
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-success btn-block btn-lg"
                        onClick={submitPayment}
                    >Pagar</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm