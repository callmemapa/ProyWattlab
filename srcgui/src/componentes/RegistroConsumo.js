import React, {useState } from 'react'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

import BackService from '../store/PeticionesBack';
import alerta from '../componentes/Alertas';

const solicitudBack = new BackService();
const notificaciones = new alerta();

const submitDatoSub = (e, consumo) => {
  e.preventDefault();

  if (consumo.idntfccn_cntrto !== '' && consumo.kwh !== '') {
    solicitudBack.postRegisterConsumo(consumo)
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

const handleLogout = (props) => { //ENVIO DE DATOS AL BACK
  props.authlogout();
  localStorage.removeItem('state');
  window.location = "/"; //Ruta a la cual me redigira si el login es verdadero
}

function RegistroConsumo(props) {
  const i18n = useTranslation();

  const [consumo, setConsumo] = useState({
    idntfccn_cntrto: '',
    kwh: ''
  })

  const onChange = e => {
    setConsumo({
      ...consumo,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <nav className="rounded-bottom" style={{ background: "linear-gradient(to right, #45B649, #DCE35B)", marginLeft: "0px", textAlign: "left" }}>
        <div className="center-block" >
          <a className="navbar-header">
            <img className="img-responsive" src="../imagenes/imagotipo.png" style={{ height: '55px', width: 'auto', maxWidth: '200px', marginLeft: "70px", marginTop: "10px" }} />
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "30px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ textAlign: "center" }}>Registro de consumo</h3>
        </div>
        <form onSubmit={(e) => submitDatoSub(e, consumo)}>
          <div className="form-group">
            Número de contrato:
                  <input type="text" name="idntfccn_cntrto" value={consumo.idntfccn_cntrto} onChange={onChange} required className="form-control" />
          </div>
          <div className="form-group">
            Cantidad KwH:
                  <input type="text" name="kwh" value={consumo.kwh} onChange={onChange} required className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <button className="btn btn-success btn-block" type="submit">Confirmar</button>
          </div>
        </form>
      </div>
      <nav className="rounded-bottom fixed-bottom" style={{ background: "linear-gradient(to right, #45B649, #DCE35B)", marginLeft: "0px", textAlign: "left" }}>
        <ul className="navbar-nav ml-auto">
          <button type="button" className="btn" style={{ fontSize: "13pt" }} onClick={() => handleLogout(props)}>
            <svg fill="black" height="20px" width="20px" viewBox="0 0 512.00533 512" xmlns="http://www.w3.org/2000/svg"><path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0" /><path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0" /></svg>
                &nbsp; {i18n.t('login.login_btn-logout')}
          </button>
        </ul>
      </nav>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.reducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    authlogout() {
      dispatch(actions.authlogout())
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(RegistroConsumo);