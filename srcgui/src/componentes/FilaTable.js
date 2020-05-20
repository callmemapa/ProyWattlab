import React from 'react';
import BotonModificar from './BotonModificar';
import BotonInactivar from './BotonInactivar';
import BotonVisualizar from './BotonVisualizar';
import BotonCrear from './BotonCrear';


function FilaTable(props) {
    //Dependiendo del tipo, se pintan las filas correspondientes
    const pintarCeldas = () => {
        switch (props.tipo) {
            case 'usuario': {
                return (
                    <React.Fragment>
                        <td>{props.usuario}</td>
                        <td>{props.nombre}</td>
                        <td>{props.apellido}</td>
                        <td>{props.email}</td>
                        <td>{props.perfil}</td>
                        <td><BotonModificar modificar={props.modificar.bind(this, props.id, props.usuario, props.nombre, props.apellido, props.email, props.perfil)} /></td>
                        {/*Con este metodo le mando la informacion con el cambio de estado*/}
                        {mostrarBotonA({ "id": props.id, "is_active": !props.estado, "profile": {} })}
                    </React.Fragment>
                )
            }
            case 'publicidad': {
                return (
                    <React.Fragment>
                        <td>{props.titulo}</td>
                        <td>{props.descripcion}</td>
                        <td><img className="icon-publicidad" src={props.url}></img></td>
                        <td>
                            <BotonModificar
                                modificar={props.modificar.bind(this, props.id, props.titulo, props.descripcion, props.url)} />
                        </td>
                        {/*Con este metodo le mando la informacion con el cambio de estado*/}
                        {mostrarBotonA({ "id": props.id, "estado": !props.estado })}
                    </React.Fragment>
                )
            }
            case 'cliente': {
                return (
                    <React.Fragment>
                        {/*Para el usuo de una nueva tabla */}
                        
                        {mostrarTipoIdent()}
                        <td>{props.numeroIdent}</td>
                        <td>{props.nombre}</td>
                        <td>{props.apellido}</td>
                        {mostrarTipoCliente()}
                        <td><BotonModificar modificar={props.modificar.bind(this, props.id, props.nombre, props.apellido, props.numeroIdent, props.tipoIdent, props.tipoClient,props.fechaNa)}/></td>
                        <td><BotonCrear crearContrato={props.crearContrato.bind(this, props.id, props.nombre, props.apellido, props.numeroIdent, props.tipoIdent, props.tipoClient)} /></td>
                        <td><BotonVisualizar verContrato={props.verContrato.bind(this,props.id, props.nombre, props.apellido, props.numeroIdent, props.tipoIdent, props.tipoClient)}/></td>
                        
                    </React.Fragment>
                )
            }
            case 'factura': {
                return (
                    <React.Fragment>
                        <td>{props.valorConsumo}</td>
                        <td>{props.valorMora}</td>
                        <td>{props.valorReconexion}</td>
                        <td>{props.valorAPagar}</td>
                        <td>{props.fechaPago}</td>
                        <td>{props.fechaCorte}</td>
                        <td>
                            <BotonVisualizar/>
                        </td>
                    </React.Fragment>
                )
            }
            case 'contrato': {
                return (
                    <React.Fragment>
                        <td>{props.direccion}</td>
                        <td>{props.estrato}</td>
                        <td><BotonModificar modificar={props.modificar.bind(this,props.id, props.estrato, props.direccion)}/></td>
                        {mostrarBotonA({ "id": props.id, "estado": !props.estado })}
                    </React.Fragment>
                )
            }
            case 'pagos': { // ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
                return(
                    <React.Fragment>
                        <td>{props.idntfccn_bnco}</td>
                        <td>{props.cnsctvo_fctra}</td>
                        <td>{props.nmro_unco_idntfccn_usro}</td>
                        <td>{props.vlr_pgdo}</td>
                        <td>{props.tp_pgdo}</td>
                        <td>{props.nmro_trjt}</td> 
                        <td>{props.obsrvcn}</td>                                      
                    </React.Fragment>
                )
            }
            default: {
                return (null)
            }
        }
    }
    const mostrarBotonA = (fila) => {
        if (props.estado === true) {
            return (
                <td>
                    <BotonInactivar cambiarEstado={props.cambiarEstado.bind(this, fila)} nombre='inactivar' claseBoton='btn btn-danger' />
                </td>
            )
        } else {
            return (
                <td>
                    <BotonInactivar cambiarEstado={props.cambiarEstado.bind(this, fila)} nombre='Activar' claseBoton='btn btn-primary' />
                </td>
            )
        }
    }

        const mostrarTipoIdent = () =>{
        if(props.tipoIdent===1){
            return(
                <td>C.C</td>
            )
        }
        if(props.tipoIdent===2){
            return(
                <td>Nit</td>
            )
        }
        if(props.tipoIdent===3){
            return(
                <td>C.E</td>
            )
        }else{
            return(
                <td>nada</td>
            )
        }
    }

    const mostrarTipoCliente = () =>{
        if(props.tipoClient===1){
            return(
                <td>Natural</td>
            )
        }
        if(props.tipoClient===2){
            return(
                <td>Juridica</td>
            )
        }
        else{
            return(
                <td>nada</td>
            )
        }
    }

        /*Aqui pinta la fila, el id que es el pricipal y las celdas basicas*/
    const mostrarFila = () => {
        return (
            <React.Fragment>
                <tr>
                    {/* Columna principal (ID)*/}
                    <th scope="row">{props.id}</th>
                    {/*Datos los que quiera mostrar */}
                    {pintarCeldas()}
                </tr>
            </React.Fragment>
        )
    }
    return (mostrarFila())
}

export default FilaTable