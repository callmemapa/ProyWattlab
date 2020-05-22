import React from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Footer from './Footer';
import Menu from './Menu';
import Recaptcha from 'react-recaptcha';
import { Layout } from 'antd';
import './style/recaptcha.css';
import alerta from '../componentes/Alertas';
const notificaciones = new alerta();


//FUNCIONES DEL CAPTCHA
let valido = null;

var callback = function () {
    console.log('Done!');
};
var verifyCallback = function (response) {
    valido = response;
};
const handleFormSubmit = (e, props) => { //ENVIO DE DATOS  AL BACK
    e.preventDefault();
    if (valido != null) {
        props.onAuth(e.target.elements.username.value, e.target.elements.password.value);
        props.history.push("/ModuloAdministrador"); //Ruta a la cual me redigira si el login es verdadero
    } else {
        alertas()
    }
}
const alertas = () => {
    notificaciones.captcha()
}

function Login(props) {
    const i18n = useTranslation();
    if (props.auth.authenticate == true && props.auth.usuario != 'Revisor') {
        return (<Redirect to="/ModuloAdministrador" />
        )
    } else if (props.auth.usuario === 'Revisor'){
        return (<Redirect to="/RegistroConsumo" />
        )
    }

    return (
        <Layout className="layout">
            <div>
                <Menu />
            </div>
            <main role="main" className="flex-shrink-0 mt-5">
                <div className="row">
                    <div className="col-lg-7">
                        <img src="../imagenes/Bombillo.jpg" className="img-fluid" alt="Responsive image" width="auto" height="auto"></img>
                    </div>
                    <div className="col-lg-5">
                        <div className="container" style={{ marginTop: 80, marginBottom: 70, textAlign: "center" }}>
                            <form onSubmit={(event) => handleFormSubmit(event, props)} style={{ marginTop: '20px' }}>
                                <div>
                                    <h1>WATTLAB</h1>
                                    <p>{i18n.t('login.login_description')}</p>
                                </div>
                                <div className="form-group">
                                    <input name="username" className="form-control" placeholder={i18n.t('login.login_doc-title')} ></input>
                                </div>
                                <div className="form-group">
                                    <input name="password" type="password" className="form-control" placeholder={i18n.t('login.login_pass-title')} ></input>
                                </div>
                                <div className="recaptcha ">
                                    <Recaptcha
                                        sitekey="6LdoWeUUAAAAAElS6IhF9lP_W6DbxqWTUDB-o-mL"
                                        render="explicit"
                                        verifyCallback={verifyCallback}
                                        onloadCallback={callback}
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-success btn-block">{i18n.t('login.login_btn-login')}</button>
                                </div>

                            </form>
                            <div style={{ marginTop: 15 }}>
                                <a href='http://127.0.0.1:8000/auth/account/password-reset/' className="text-decoration-none">{i18n.t('login.login_pass-forget-description')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </Layout>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.reducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth(username, password) {
            dispatch(actions.authLogin(username, password))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
