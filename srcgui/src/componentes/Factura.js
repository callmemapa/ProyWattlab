//import React, { Component } from 'react'

import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'

import { useTranslation } from 'react-i18next';

import React, { useRef, useEffect, useState } from 'react'

import ImagePubilidad from './Image'


const styleH1 = {
  fontSize: '15px',
  textAlign: 'center',
  color: 'red'
};

const invisibleStyle = {
  display: 'none',
};

function Factura(props) {
    const i18n = useTranslation();
    var titulo = props.h1;
    var nameBtn = props.nameBtn;
    //La referencia para poder enfocar
    const myRef = useRef();
    const myRef2 = useRef();

    const [factura, setFactura] = useState({
      id: 2,
      cnsctvo_cnsmo: {
          id: '',
          kwh: '',
          prdo_cnsmo: '',
          obsrvcn: '',
          idntfccn_cntrto: {
              id: '',
              estrt_scl: '',
              drccn: '',
              estado: '',
              cliente: ''
          }
      },
      cnsctvo_trfa: {
          id: '',
          vlr_kwh: '',
          inco_vgca: '',
          obsrvcn: '',
          estdo: ''
      },
      vlr_cnsmo: '',
      vlr_intrss_mra: '',
      vlr_rcnxn: '',
      vlr_ttl: '',
      fcha_lmte_pgo: '',
      cntdd_fctrs_pndts: '',
      fcha_crte_srvco: '',
      obsrvcn: '',
      estado: ''
    })

    useEffect(() => {
      if (props.id === 'verFactura') {
        myRef.current.focus();
        actualizar();
      }
    }, [props.id, props.focus])

    const actualizar = () => {
      setFactura({
          ...factura,
          id: props.idRow,
          cnsctvo_cnsmo: {
            id: props.idConsumo,
            kwh: props.kwh,
            prdo_cnsmo: props.periodoConsumo,
            obsrvcn: props.observacionConsumo,
            idntfccn_cntrto: {
                id: props.idContrato,
                estrt_scl: props.estrato,
                drccn: props.direccion,
                estado: props.estadoContrato,
                cliente: props.idCliente
            }
          },
          cnsctvo_trfa: {
            id: props.idTarifa,
            vlr_kwh: props.valorKwh,
            inco_vgca: props.inicioVigencia,
            obsrvcn: props.observacionTarifa,
            estdo: props.estadoTarifa
          },
          vlr_cnsmo: props.valorConsumo,
          vlr_intrss_mra: props.interesMora,
          vlr_rcnxn: props.valorReconexion,
          vlr_ttl: props.valorTotal,
          fcha_lmte_pgo: props.fechaLimitePago,
          cntdd_fctrs_pndts: props.cantidadFacturasPendientes,
          fcha_crte_srvco: props.FechaCorteServicio,
          obsrvcn: props.observacionFactura,
          estado: props.estadoFactura
      })
    }

    const properties = { header: 'Acme' }
    const head = [["Item", "Nombre", "Valor"]]
    const body = [
        [1, "kWh consumidos", factura.cnsctvo_cnsmo.kwh],
        [2, "Periodo consumo", factura.cnsctvo_cnsmo.prdo_cnsmo],
        [3, "Valor KwH", "$"+factura.cnsctvo_trfa.vlr_kwh],
        [4, "Vigencia tarifa", factura.cnsctvo_trfa.obsrvcn],
        [5, "Valor consumo", "$"+factura.vlr_cnsmo],
        [6, "Valor mora", "$"+factura.vlr_intrss_mra],
        [7, "Valor reconexión", "$"+factura.vlr_rcnxn],
        [8, "Valor total a pagar", "$"+factura.vlr_ttl],
    ]
    const head1 = [["Fecha límite de pago", "Fecha de corte de servicio"]]
    const body1 = [
      [factura.fcha_lmte_pgo, factura.fcha_crte_srvco],
    ]
    const head2 = [["Observaciones"]]
    const body2 = [[factura.obsrvcn]]

    const head3 = [["# Contrato", "ID Cliente", "Estrato", "Dirección residencia"]]
    const body3 = [[factura.cnsctvo_cnsmo.idntfccn_cntrto.id, factura.cnsctvo_cnsmo.idntfccn_cntrto.cliente, factura.cnsctvo_cnsmo.idntfccn_cntrto.estrt_scl, factura.cnsctvo_cnsmo.idntfccn_cntrto.drccn]]
    const body4 = [["TOTAL A PAGAR", "$"+factura.vlr_ttl]]
    
    return (
      <React.Fragment>
        <PDF properties={properties} preview={true}>
        <Text x={23} y={30} size={40} style>Factura de servicios públicos</Text>
            <Table head={head1} body={body1}/>
            <Table head={head3} body={body3}/>
            <Table head={head} body={body}/>
            <Table head={head2} body={body2}/>
            <Table body={body4}/>
            <Image src={ImagePubilidad}  x={15} y={230} width={180} height={60}></Image>
            <Html sourceById='page'/>
        </PDF>
        <div id="page" style={invisibleStyle}></div>
      </React.Fragment>
    ) 
    
  }


export default Factura;
