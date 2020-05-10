import React from 'react';
import { Translation, withTranslation } from 'react-i18next';
import i18n from "i18next";
import { Layout } from 'antd';
import Menu from './Menu';
import Footer from './Footer';

class ConsultaFactura extends React.Component {
    render() {
        return (
            <Layout className="layout" style={{backgroundColor: "white"}}>
                <div>
                    <Menu/>
                </div>
                <div style={{marginTop: "70px", marginLeft: "0px", marginRight: "0px"}}>
                    <img className="img-fluid" alt="Responsive image" src='../imagenes/ConsultaFactura.jpg'/>
                </div>
                <div className="container-fluid" style={{marginTop: "10px", marginBottom: "10px"}}>
                    <div className="form-row justify-content-lg-center justify-content-md-center" style={{marginTop: "20px"}}>
                        <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
                            <p>{i18n.t('homepage.bill-homepage.bill_dig-doc')}</p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
                            <input className="form-control" placeholder="" style={{marginBottom: "10px"}}></input>
                        </div>
                        <div className="btn-group col-lg-3 col-md-4 col-sm-3 col-xs-12">
                            <button type="button" className="btn btn-success btn-default" style={{marginRight: "10px", width: "80px", height: "40px"}}>
                                <Translation>
                                    {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-search')}</p>}
                                </Translation>                            
                            </button>
                            <button type="button" className="btn btn-success btn-default" style={{ width: "80px", height: "40px"}}>
                                <Translation>
                                    {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-clean')}</p>}
                                </Translation>   
                            </button>
                        </div>
                    </div>
                    <div className="container pre-scrollable" style={{marginTop: "10px", maxHeight: "350px", marginBottom: "20px"}}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_num-fact')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_prd')}</p>}
                                        </Translation>       
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_valwouts')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_datewouts')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_valws')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_datews')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_state')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_datepay')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_valpay')}</p>}
                                        </Translation>
                                    </th>
                                    <th scope="col">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_fts')}</p>}
                                        </Translation>
                                    </th>
                                </tr>
                                <tr>
                                    <td>20050</td>
                                    <td>Enero 2020</td>
                                    <td>$70.000</td>
                                    <td>30-01-2020</td>
                                    <td>$100.000</td>
                                    <td>30-03-2020</td>
                                    <td><span className="badge badge-danger">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-wpay')}</p>}
                                        </Translation>
                                    </span></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>65200</td>
                                    <td>Diciembre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-pay')}</p>}
                                        </Translation>
                                    </span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>65200</td>
                                    <td>Noviembre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-pay')}</p>}
                                        </Translation>
                                    </span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>65200</td>
                                    <td>Octubre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-pay')}</p>}
                                        </Translation>
                                    </span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>65200</td>
                                    <td>Septiembre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">
                                        <Translation>
                                            {(t, { i18n }) => <p>{t('homepage.bill-homepage.bill_btn-pay')}</p>}
                                        </Translation>
                                    </span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(ConsultaFactura);