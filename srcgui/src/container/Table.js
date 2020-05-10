import React, { Component } from 'react'
import FilaTable from '../componentes/FilaTable';

class Table extends Component {

    tablaPublicidad = () => {
        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>
                        <th scope="col">{this.props.t6}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(publicidad => (
                        <FilaTable
                            cambiarEstado={this.props.cambiarEstado}
                            modificar={this.props.modificar}
                            tipo='publicidad'
                            key={publicidad.id}
                            id={publicidad.id}
                            titulo={publicidad.titulo}
                            descripcion={publicidad.descripcion}
                            url={publicidad.url}
                            estado={publicidad.estado}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)
    }

    tablaUsuario = () => {
        return (<React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">{this.props.t1}</th>
                        <th scope="col">{this.props.t2}</th>
                        <th scope="col">{this.props.t3}</th>
                        <th scope="col">{this.props.t4}</th>
                        <th scope="col">{this.props.t5}</th>
                        <th scope="col">{this.props.t6}</th>
                        <th scope="col">{this.props.t7}</th>
                        <th scope="col">{this.props.t8}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.datos.map(usuario => (
                        <FilaTable
                            cambiarEstado={this.props.cambiarEstado}
                            modificar={this.props.modificar}
                            tipo='usuario'
                            key={usuario.id}
                            id={usuario.id}
                            usuario={usuario.username}
                            nombre={usuario.first_name}
                            apellido={usuario.last_name}
                            email={usuario.email}
                            perfil={usuario.profile.tipo_usuario}
                            estado={usuario.is_active}
                        />
                    ))}
                </tbody>
            </table>
        </React.Fragment>)
    }




    mostrarTabla = () => {
        if (this.props.tabla === 'publicidad') {
            return this.tablaPublicidad()
        }
        if (this.props.tabla === 'usuario') {
            return this.tablaUsuario()
        } else {
            return null
        }
    }



    render() {
        return (
            this.mostrarTabla()
        )
    }

}

export default Table
