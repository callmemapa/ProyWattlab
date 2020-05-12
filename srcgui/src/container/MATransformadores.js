import React, { Component } from 'react';
import { Translation, withTranslation } from 'react-i18next';
import i18n from "i18next";
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import Maps from '../componentes/Maps'
import Transformador from '../componentes/Transformador';
import Subestacion from '../componentes/Subestacion';

class MATransformadores extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'trans' };
    this.handleChange = this.handleChange.bind(this);
    this.handleTrans = this.handleTrans.bind(this);
    this.handleSub = this.handleSub.bind(this);
    //this.t = this.t.bind(this);
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
  renderInputSelection() {
    if (this.state.mode === 'trans') {
      return (<div style={{ marginBottom: "20px" }}>
        <Layout style={{ backgroundColor: "white" }}>
          <Transformador />
        </Layout>
      </div>);
    } else {
      return (
        <div style={{ marginBottom: "20px" }}>
          <Subestacion />
        </div>
      );
    }
  }
  renderButton() {
    if (this.state.mode === 'trans') {
      return (
        <button className="btn btn-success" onClick={this.handleSub}>
          <Translation>
            {(t, { i18n }) => <p>{t('actives-panel.actives-panel-substation.act_btn-sub')}</p>}
          </Translation>
        </button>

      );
    } else {
      return (
        <button className="btn btn-success" onClick={this.handleTrans}>
          <Translation>
            {(t, { i18n }) => <p>{t('actives-panel.actives-panel-transformer.act_btn-trfm')}</p>}
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
                <Maps />
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
                      <input style={{ textAlign: "center" }} type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="¿Qué desea añadir?" placeholder={i18n.t('actives-panel.act_msj-add')}></input>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ justifyContent: "center" }}>
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