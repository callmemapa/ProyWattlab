import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'

import { useTranslation } from 'react-i18next';

import React, { useRef, useEffect, useState, Component } from 'react'

import ImagePubilidad from './Image'

const styleH1 = {
    fontSize: '15px',
    textAlign: 'center',
    color: 'red'
  };
  
const invisibleStyle = {
    display: 'none',
};

const properties = { header: 'Acme'}
const head = [["Item", "Nombre"]]
const body = [
    [1, "Item 1"]
    [2, "Item 2"]
]

class FacturaPrueba extends Component {

    state = {
        id:'',
        vlr_cnsmo: '',
        vlr_intrss_mra: '',
        vlr_rcnxn: '',
        vlr_ttl: '',
        fcha_lmte_pgo: '',
        fcha_crte_srvco: '',
    }

    mostrarFactura = () => {
        return (
            <React.Fragment>
                <PDF properties={properties} preview={true}>
                <Text x={23} y={30} size={40} style>Factura de servicios públicos</Text>
                <Html sourceById='page'/>
                </PDF>
                <div id="page" style={invisibleStyle}></div>
            </React.Fragment>
        )
    }

    render() {
        return (
            this.mostrarFactura()
        )
    }
}

export default FacturaPrueba