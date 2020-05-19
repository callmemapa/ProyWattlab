import React from 'react';
import { useTranslation } from 'react-i18next';
import { Chart } from "react-google-charts";
import Encabezado from './Encabezado';

function Reportes(props) {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
            <Encabezado
                titulo={i18n.t('reports-panel.rpt_int-title')}
                descripcion={i18n.t('reports-panel.rpt_int-description')} />
            <div className="container" style={{ display: 'flex', maxWidth: 900, marginBottom: "20px" }}>
                <div className="col" >
                    <div className="row" >
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center"> {i18n.t('reports-panel.rpt_clientes')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#3298d1"}}>{props.reporte.clientes}</h2>
                        </div>
                        <div className="col-lg-4 col-md-6  col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_cntrt-activo')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#32d156"}}>{props.reporte.contrato}</h2>
                        </div>
                        <div className="col-lg-4 col-md-12  col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_cntd-sube')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#d381ff"}}>{props.reporte.subE}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_cntd-trns')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#EE3F69"}}>{props.reporte.trnsf}</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_conv-act-banco')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#eabf2e"}}>{props.reporte.banco_Activo}</h2>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_conv-inct-banco')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#00E09C"}}>{props.reporte.banco_Inctivo}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_prm-enrg')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#ea2e2e"}}>{props.reporte.consu_ener}</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <h3 align="center">{i18n.t('reports-panel.rpt_ingr-dinero')}</h3>
                            <p></p>
                            <h2 align="center" style={{borderRadius: "15px", background: "#d381ff"}}>{props.reporte.dinero}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-md-12 col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                            <Chart
                                width={400}
                                height={'300px'}
                                chartType="AreaChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Año', 'Ingresos', 'Gastos'],
                                    ['2019', 600, 400],
                                    ['2020', 1000, 600],
                                    ['2021', 0, 0],
                                ]}
                                options={{
                                    title: 'Reporte de ingresos',
                                    hAxis: { title: 'Año', titleTextStyle: { color: '#333' } },
                                    vAxis: { minValue: 0 },
                                    // For the legend to fit, we make the chart area smaller
                                    chartArea: { width: '50%', height: '70%' },
                                    // lineWidth: 25
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reportes;