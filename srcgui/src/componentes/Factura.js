import React, { Component } from 'react'

import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'


const styleH1 = {
  fontSize: '15px',
  textAlign: 'center',
  color: 'red'
};

const invisibleStyle = {
  display: 'none',
};

export default class Factura extends Component {
  render () {
    const properties = { header: 'Acme' }
    const head = [["Item", "Nombre", "Valor"]]
    const body = [
        [1, "Valor consumo", 145200],
        [2, "Valor mora", 0],
        [3, "Valor reconexión", 0],
        [4, "Valor total a pagar", 145200],
    ]
    return (
      <React.Fragment>
        <PDF properties={properties} preview={true}>
            <Text x={35} y={25} size={40}>Factura</Text>
            <Table head={head} body={body}/>
            <Html sourceById='page'/>
        </PDF>
        <div id="page" style={invisibleStyle}></div>
      </React.Fragment>
    )
  }
}