import React, { PureComponent } from 'react';
import { Button,  } from 'antd';

import jsPDF from 'jspdf'

export default class pdfGenerate extends PureComponent {
    constructor(props){
        super(props)
        this.state ={}
    }
  
    // JSpdf Generator For generating the PDF
    jsPdfGenerator = () => {

        // Example From https://parall.ax/products/jspdf
        var doc = new jsPDF('p', 'pt');
        
        doc.text(20, 20, 'This is the default font.')
        doc.lines([[2,2],[-2,2],[1,1,2,2,3,3],[2,1]], 212,110, [1,1], 'F', false) // line, line, bezier curve, line

        doc.setFont('courier')
        doc.setFontType('normal')
        doc.text(20, 30, 'This is courier normal.')

        doc.setFont('times')
        doc.setFontType('italic')
        doc.text(20, 40, 'This is times italic.')

        doc.setFont('helvetica')
        doc.setFontType('bold')
        doc.text(20, 50, 'This is helvetica bold.')

        doc.setFont('courier')
        doc.setFontType('bolditalic')
        doc.text('This is courier bolditalic.', 20, 60, 'center')
        
        
        // Save the Data
        doc.save('Generated.pdf')
    }
  
    render(){
      return(
         <Button onClick={this.jsPdfGenerator} type="primary"> Generate PDF </Button> 
        )
     }
  
  
}