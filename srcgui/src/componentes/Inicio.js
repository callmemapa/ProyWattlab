import React from 'react'
import { useTranslation } from 'react-i18next';
import CardOpt from './CardOpt';
import Encabezado from './Encabezado';
import { connect } from 'react-redux';


function Inicio(props) {
  const i18n = useTranslation();

  const acceso = () => {
    switch (props.auth.usuario) {
      case 'Administrador': {
        return (
          <React.Fragment>
            <CardOpt
              modulo={i18n.t('users-panel.usr_ext-title')}
              urlRuta="/ModuloAdministrador/Users"
              color="#3298d1"
              d1="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              icono="bi bi-people-fill"
              informacion={i18n.t('users-panel.usr_ext-description')} />
            <CardOpt
              modulo={i18n.t('actives-panel.act_ext-title')}
              urlRuta="/ModuloAdministrador/Activos"
              color="#32d156"
              d1="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
              icono="bi bi-geo-alt"
              informacion={i18n.t('actives-panel.act_ext-description')} />
            <CardOpt
              modulo={i18n.t('banks-panel.bks_ext-title')}
              urlRuta="/ModuloAdministrador/Bancos"
              color="#d381ff"
              d1="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z"
              d2="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z"
              icono="bi bi-person-square"
              informacion={i18n.t('banks-panel.bks_ext-description')} />
          </React.Fragment>)
      }
      case 'Gerente': {
        return (
          <React.Fragment>
            <CardOpt
              modulo={i18n.t('customers-panel.cst_ext-title')}
              urlRuta="/ModuloAdministrador/Clientes"
              color="#EE3F69"
              d1="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
              d2="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z"
              icono="bi bi-person-square"
              informacion={i18n.t('customers-panel.cst_ext-description')} />
            <CardOpt
              modulo={i18n.t('reports-panel.rpt_ext-title')}
              urlRuta="/ModuloAdministrador/Reportes"
              color="#eabf2e"
              d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"
              d1="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
              d2="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
              icono="bi bi-graph-up"
              informacion={i18n.t('reports-panel.rpt_ext-description')} />
            <CardOpt
              modulo={i18n.t('advertising-panel.adv_ext-title')}
              urlRuta="/ModuloAdministrador/Publicidad"
              color="#00E09C"
              d1="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 018.5 2.5v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 010 13.5v-11a.5.5 0 01.276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 01.22-.103 12.958 12.958 0 012.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 001 2.82z"
              d2="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 007.5 2.5v11a.5.5 0 00.854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0016 13.5v-11a.5.5 0 00-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609z"
              icono="bi bi-book-half"
              informacion={i18n.t('advertising-panel.adv_ext-description')} />
          </React.Fragment>)
      }
      case 'Operador': {
        return (
          <React.Fragment>
            <CardOpt
              modulo={i18n.t('payments-panel.pay_ext-title')}
              urlRuta="/ModuloAdministrador/Pagos"
              color="#ea2e2e"
              d1="M.125 11.17A.5.5 0 01.5 11H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 16H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zM3.81.563A1.5 1.5 0 014.98 0h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624A.5.5 0 0011.02 1H4.98a.5.5 0 00-.39.188L.89 5.812a.5.5 0 11-.78-.624L3.81.563z"
              d2="M.125 5.17A.5.5 0 01.5 5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0110 5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 10H1.883A1.5 1.5 0 01.394 8.686l-.39-3.124a.5.5 0 01.121-.393z"
              icono="bi bi-inboxes-fill"
              informacion={i18n.t('payments-panel.pay_ext-description')} />
            <CardOpt
              modulo={i18n.t('banks-panel.bks_ext-title')}
              urlRuta="/ModuloAdministrador/Bancos"
              color="#d381ff"
              d1="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z"
              d2="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z"
              icono="bi bi-person-square"
              informacion={i18n.t('banks-panel.bks_ext-description')} />
          </React.Fragment>)
      }
      case 'Revisor':{
        return (
          <React.Fragment>
          
          </React.Fragment>
        )
      }
    }
  }

  const mostrarInicio = () => {
    return (
      <React.Fragment>
        <div className="container-fluid" style={{ textAlign: "center", backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
          <Encabezado
            titulo={i18n.t('administration-panel.adm_title')}
            descripcion={i18n.t('administration-panel.adm_description')} />
          <div className="container">
            <div className="row justify-content-md-center" style={{ marginBottom: "30px" }}>

              {acceso()}

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  return (mostrarInicio())
}

const mapStateToProps = state => {
  return {
    auth: state.reducer
  }
};

export default connect(mapStateToProps)(Inicio);
