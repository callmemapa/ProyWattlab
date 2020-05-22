import React, { Component } from 'react';
import { Translation, withTranslation } from 'react-i18next';
import { Layout } from 'antd';
import Sidebar from '../componentes/Sidebar';
import Maps from '../componentes/Maps'
import Transformador from '../componentes/Transformador';
import Subestacion from '../componentes/Subestacion';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService();

class MATransformadores extends Component {

  state = { mode: 'sub', lngtd: '', lttd: '', subE: [] };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTrans = this.handleTrans.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }
  handleTrans() {
    this.setState({ mode: 'trans' });
  }
  handleSub() {
    this.setState({ mode: 'sub' });
  }

  //DATOS  del mapa
  submitDatosMap = (e, map) => {
    this.setState({ lngtd: map.lngtd, lttd: map.lttd })
  }

  componentDidMount() {
    this.submitSub();
  }

  submitSub = async () => {
    solicitudBack.getSubestacion()
      .then(res => {
        this.setState({
          subE: res
        })
      })
  }

  renderInputSelection() {
    if (this.state.mode === 'trans') {
      return (<div style={{ marginBottom: "20px" }}>
        <Layout style={{ backgroundColor: "white" }}>

          <Transformador
            dato={this.state.subE}
            longitud={this.state.lngtd}
            latitud={this.state.lttd} />
        </Layout>
      </div>);
    } else {
      return (
        <div style={{ marginBottom: "20px" }}>

          <Subestacion
            longitud={this.state.lngtd}
            latitud={this.state.lttd} />
        </div>
      );
    }
  }

  renderButton() {
    if (this.state.mode === 'trans') {
      return (
        <button className="btn btn-success" onClick={this.handleSub}>
          <Translation>
            {(t, { i18n }) => <a>{t('actives-panel.actives-panel-substation.act_btn-sub')}</a>}
          </Translation>
        </button>

      );
    } else {
      return (
        <button className="btn btn-success" onClick={this.handleTrans}>
          <Translation>
            {(t, { i18n }) => <a>{t('actives-panel.actives-panel-transformer.act_btn-trfm')}</a>}
          </Translation>
        </button>
      );
    }
  }


  render() {
    return (
      <Layout className="layout" style={{ backgroundColor: "white" }}>
        <div>
          <Sidebar />
        </div>
        <div className="container-fluid" style={{ marginTop: "0px", position: "relative" }}>
          <div className="row">
            <div className="col-lg-7">
              <div style={{ backgroundColor: "black", margin: "1em" }}>

                <Maps subClick={this.submitDatosMap} />

              </div>
            </div>
            <div className="col-lg-5">
              <div style={{ margin: "1em 0" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <Translation>
                    {(t, { i18n }) => <h2>{t('actives-panel.act_int-title')}</h2>}
                  </Translation>
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <input style={{ textAlign: "left" }} type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="¿Qué desea añadir?"></input>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ justifyContent: "center", marginLeft: "5px" }}>
                      {this.renderButton()}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {this.renderInputSelection()}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withTranslation()(MATransformadores);
