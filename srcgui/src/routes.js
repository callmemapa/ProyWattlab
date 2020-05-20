import React from 'react';
//CONFIGURACION
import { BrowserRouter, Route, Switch, DefaultRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import PrivateRoute from './privateRouter'

//COMPONENTES
import InformacionServicios from './container/InformacionServicios';
import MenuInicio from './container/MenuInicio';
import Login from './componentes/Login';
import PQRS from './componentes/PQRS';
import ConsultaFactura from './componentes/ConsultaFactura';
import ModuloAdministrador from './container/ModuloAdministrador';
import MAUsers from './container/MAUsers';
import MADashboard from './container/MADashboard';
import MATransformadores from './container/MATransformadores';
import MAReportes from './container/MAReportes';
import MAPagos from './container/MAPagos';
import MAPagosBancos from './container/MAPagosBancos'; // NUEVO
import MAConfiguracion from './container/MAConfiguracion';
import MAPublicidad from './container/MAPublicidad';
import RegistroConsumo from './componentes/RegistroConsumo';
import PageNotFound from './container/PageNotFound';
import MAClientes from './container/MAClientes';

function BaseRouter() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MenuInicio} />
                        <Route exact path="/InformacionServicios" component={InformacionServicios} />
                        <Route exact path="/PQRS" component={PQRS} />
                        <Route exact path="/ConsultaFactura" component={ConsultaFactura} />
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/ModuloAdministrador" component={ModuloAdministrador} />
                        <Route exact path="/ModuloAdministrador/Users" component={MAUsers} />
                        <Route exact path="/ModuloAdministrador/Activos" component={MATransformadores} />
                        <Route exact path="/ModuloAdministrador/Reportes" component={MAReportes} />
                        <Route exact path="/ModuloAdministrador/Pagos" component={MAPagos} />
                        <Route exact path="/ModuloAdministrador/Configuracion" component={MAConfiguracion}/>                      
                        <Route exact path="/ModuloAdministrador/Publicidad" component={MAPublicidad} />
                        <Route exact path="/ModuloAdministrador/Clientes" component={MAClientes} />
                        <Route exact path="/ModuloAdministrador/Bancos" component={MAPagosBancos} />
                        <Route exact path="/RegistroConsumo" component={RegistroConsumo} />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default BaseRouter;