//import React, { Component } from 'react'

import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'

import { useTranslation } from 'react-i18next';

import React, { Component } from 'react'

import ImagePubilidad from './Image'


const styleH1 = {
  fontSize: '15px',
  textAlign: 'center',
  color: 'red'
};

const invisibleStyle = {
  display: 'none',
};
const i18n = useTranslation();


class Factura extends Component {

  //Para inactivar o activar tomar el id del cliente, el estado, y el profile vacio, 
  //Para modificar crear un segundo estado con el id, nmro_idntfccn, prmr_nmbre, prmr_aplldo, email, tpo_idntfcn

  //Los estados, los cuales almacenan los valores de los inputs
  state = {
    id: 2,
    cnsctvo_cnsmo: {
      id: 4,
      kwh: 110,
      prdo_cnsmo: "202007",
      obsrvcn: "Registro de consumo",
      idntfccn_cntrto: {
        id: 2,
        estrt_scl: 1,
        drccn: "Calle 72q #27o",
        estado: true,
        cliente: 2
      }
    },
    
    cnsctvo_trfa: {
      id: 1,
      vlr_kwh: 9.501,
      inco_vgca: "2020-05-15",
      obsrvcn: "Tarifa kwh año 2020",
      estdo: true
    },
    vlr_cnsmo: 171.018,
    vlr_intrss_mra: 0.0,
    vlr_rcnxn: 0.0,
    vlr_ttl: 171.018,
    fcha_lmte_pgo: "2020-05-22",
    cntdd_fctrs_pndts: 0,
    fcha_crte_srvco: "2020-05-30",
    obsrvcn: "Ningún problema",
    estado: false
  }

  

  render() {
    var titulo = this.props.h1;
    var nameBtn = this.props.nameBtn;

    const properties = { header: 'Acme' }
    const head = [["Item", "Nombre", "Valor"]]
    const body = [
      [1, "kWh consumidos", this.state.cnsctvo_cnsmo.kwh],
      [2, "Periodo consumo", this.state.cnsctvo_cnsmo.prdo_cnsmo],
      [3, "Valor KwH", "$" + this.state.cnsctvo_trfa.vlr_kwh],
      [4, "Vigencia tarifa", this.state.cnsctvo_trfa.obsrvcn],
      [5, "Valor consumo", "$" + this.state.vlr_cnsmo],
      [6, "Valor mora", "$" + this.state.vlr_intrss_mra],
      [7, "Valor reconexión", "$" + this.state.vlr_rcnxn],
      [8, "Valor total a pagar", "$" + this.state.vlr_ttl],
    ]
    const head1 = [["Fecha límite de pago", "Fecha de corte de servicio"]]
    const body1 = [
      [this.state.fcha_lmte_pgo, this.state.fcha_crte_srvco],
    ]
    const head2 = [["Observaciones"]]
    const body2 = [[this.state.obsrvcn]]

    const head3 = [["# Contrato", "ID Cliente", "Estrato", "Dirección residencia"]]
    const body3 = [[this.state.cnsctvo_cnsmo.idntfccn_cntrto.id, this.state.cnsctvo_cnsmo.idntfccn_cntrto.cliente, this.state.cnsctvo_cnsmo.idntfccn_cntrto.estrt_scl, this.state.cnsctvo_cnsmo.idntfccn_cntrto.drccn]]
    const body4 = [["TOTAL A PAGAR", "$" + this.state.vlr_ttl]]

    return (
      <React.Fragment>
        <PDF properties={properties} preview={true}>
          <Text x={23} y={30} size={40} style>Factura de servicios públicos</Text>
          <Table head={head1} body={body1} />
          <Table head={head3} body={body3} />
          <Table head={head} body={body} />
          <Table head={head2} body={body2} />
          <Table body={body4} />
          <Image src={ImagePubilidad} x={15} y={230} width={180} height={60}></Image>
          <Html sourceById='page' />
        </PDF>
        <div id="page" style={invisibleStyle}></div>
      </React.Fragment>
    )
  }
}


export default Factura;
