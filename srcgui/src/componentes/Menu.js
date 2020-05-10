import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Language from './Language';
import './style/styles.css'

function Menu() {
    const i18n = useTranslation();
    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top rounded-bottom" style={{ background: "linear-gradient(to right, #45B649, #DCE35B)" }}>
                    <Link to="/" className="navbar-header">
                        <img className="img-responsive" src="../imagenes/imagotipo.png" style={{ width: 'auto', maxWidth: '200px' }}/>
                    </Link>
                    <div className="btn-group rounded">
                        <Language />
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <button type="button" className="btn" style={{fontSize: "13pt"}} onClick={() => window.location = "/Login"}>
                            {i18n.t('login.login_title')}
                        </button>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Menu;