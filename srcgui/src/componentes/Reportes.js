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
                    <div className="row" style={{width: "900px", height:"200px", padding: "10px"}} >
                        <div className="col" >
                            <h3 align="center"> {i18n.t('reports-panel.rpt_clientes')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.clientes}</h2>
                        </div>
                        <div className="col">
                            <h3 align="center">{i18n.t('reports-panel.rpt_cntrt-activo')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.contrato}</h2>
                        </div>
                        <div className="col" >
                            <h3 align="center">{i18n.t('reports-panel.rpt_cntd-sube')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.subE}</h2>
                        </div>
                    </div>

                    <div className="row" style={{width: "900px", height:"200px", padding: "10px"}}>
                        <div className="col">
                            <h3 align="center">{i18n.t('reports-panel.rpt_cntd-trns')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.trnsf}</h2>
                        </div>
                        <div className="col" >
                            <h3 align="center">{i18n.t('reports-panel.rpt_conv-act-banco')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.banco_Activo}</h2>
                        </div>
                        <div className="col" >
                            <h3 align="center">{i18n.t('reports-panel.rpt_conv-inct-banco')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.banco_Inctivo}</h2>
                        </div>
                    </div>
                    <div className="row" style={{ width: "900px", height: "200px", padding: "10px" }}>
                        <div className="col">
                            <h3 align="center">{i18n.t('reports-panel.rpt_prm-enrg')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.consu_ener}</h2>
                        </div>
                        <div className="col" >
                            <h3 align="center">{i18n.t('reports-panel.rpt_ingr-dinero')}</h3>
                            <p></p>
                            <h2 align="center">{props.reporte.dinero}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
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
                                    ['2022', 0, 0],
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