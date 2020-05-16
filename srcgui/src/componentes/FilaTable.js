import React from 'react';
import BotonModificar from './BotonModificar';
import BotonInactivar from './BotonInactivar';
import BotonVisualizar from './BotonVisualizar';


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
                        <td>
                            <BotonModificar
                                modificar={props.modificar.bind(this, props.id, props.usuario, props.nombre, props.apellido, props.email, props.perfil)} />
                        </td>
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
            case 4: {
                return (
                    <React.Fragment>
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
                    <BotonInactivar cambiarEstado={props.cambiarEstado.bind(this, fila)} nombre='users-panel.usr_btn-inactive' claseBoton='btn btn-danger' />
                </td>
            )
        } else {
            return (
                <td>
                    <BotonInactivar cambiarEstado={props.cambiarEstado.bind(this, fila)} nombre='users-panel.usr_btn-activate' claseBoton='btn btn-primary' />
                </td>
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