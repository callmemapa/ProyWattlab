import React, { Component } from 'react'; 
import i18n from '../i18next';
import { useTranslation } from 'react-i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import { Chart } from "react-google-charts";
import Encabezado from './Encabezado';

function Reportes() {
    const i18n = useTranslation();
        return (
            <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
                <Encabezado
                    titulo = {i18n.t('reports-panel.rpt_int-title')}
                    descripcion = {i18n.t('reports-panel.rpt_int-description')}/>
                <div className="container" style={{ display: 'flex', maxWidth: 900, marginBottom: "20px" }}>
                    <div className="row">
                        <div className="col">
                            <Chart
                                width={400}
                                height={300}
                                chartType="ColumnChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                ['City', '2010 Population', '2000 Population'],
                                ['New York City, NY', 8175000, 8008000],
                                ['Los Angeles, CA', 3792000, 3694000],
                                ['Chicago, IL', 2695000, 2896000],
                                ['Houston, TX', 2099000, 1953000],
                                ['Philadelphia, PA', 1526000, 1517000],
                                ]}
                                options={{
                                title: 'Population of Largest U.S. Cities',
                                chartArea: { width: '30%' },
                                hAxis: {
                                    title: 'Total Population',
                                    minValue: 0,
                                },
                                vAxis: {
                                    title: 'City',
                                },
                                }}
                                legendToggle
                            />
                        </div>
                        <div className="col">
                            <Chart
                                width={400}
                                height={'300px'}
                                chartType="AreaChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                ['Año', 'Ingresos', 'Gastos'],
                                ['2015', 1000, 400],
                                ['2016', 1000, 400],
                                ['2017', 1000, 400],
                                ['2018', 1170, 460],
                                ['2019', 660, 1120],
                                ['2020', 1030, 540],
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
        );
}

export default Reportes;