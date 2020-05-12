import { useTranslation } from 'react-i18next';

import React, { useRef, useEffect, useState } from 'react'
import Password from 'antd/lib/input/Password';

function ModificarUse(props) {
    const i18n = useTranslation();
    var titulo= props.h1;
    var nameBtn= props.nameBtn;
    //La referencia para poder enfocar
    const myRef = useRef();

    //Para inactivar o activar tomar el id del usuario, el estado, y el profile vacio, 
    //Para modificar crear un segundo estado con el id, username, first_name, last_name, email, tipo_usuario

    //Los estados, los cuales almacenan los valores de los inputs
    const [usuario, setUsuario] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        profile: {
            identificacion: '',
            tipo_usuario: ''
        },
    })

    //Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    //Tambien me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        myRef.current.focus();
        actualizar();
    }, [props.idRow])


    //Este metodo actualiza los estados de acuerdo a los props.
    const actualizar = () => {
        setUsuario({
            ...usuario,
            id: props.idRow,
            username: props.usuario,
            first_name: props.nombre,
            last_name: props.apellido,
            email: props.email,
            profile: {
                tipo_usuario: props.perfil
            },
        })
    }


    //Cada vez que se escriba en un input el valor se almacena en los estados
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        })
        if (e.target.name === 'identificacion' || e.target.name === 'tipo_usuario') {
            setUsuario({
                ...usuario,
                profile: {
                    ...usuario.profile,
                    [e.target.name]: e.target.value,
                    [e.target.name]: e.target.value
                }
            })
        }
        // console.log(usuario)
    }

    const mostrarFormulario = () => {
        if (props.id === 'Nuevo') {
            return (
                <React.Fragment>
                    <div className='form-row'>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputContrasena">{i18n.t('login.login_pass-title')}</label>
                            <input required onChange={onChange} name="password" type="password" value={usuario.password} className="form-control" id="inputContrasena" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCContrasena">{i18n.t('login.login_2pass-title')}</label>
                            <input required name="cPassword" type="password" className="form-control" id="inputCContrasena" />
                        </div>
                    </div>

                    <h2>{i18n.t('users-panel.usr_profile')}</h2>
                    <div className="form-group">
                        <label htmlFor="inputAddress">{i18n.t('users-panel.usr_id')}</label>
                        <input required name="identificacion" onChange={onChange} type="text" value={usuario.profile.identificacion} className="form-control" id="inputAddress" />
                    </div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }

    return (
        <div className="container">
            <br /><br /><br /><br /><br />
            <h1 className="text-center">{i18n.t(titulo)}</h1>
            <br /><br /><br />
            <form method="POST" onSubmit={(event) => props.onSubmit(event, usuario)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputUsuario">{i18n.t('users-panel.usr_user-name')}</label>
                        <input required name="username" onChange={onChange} ref={myRef} type="text" value={usuario.username} className="form-control" id="inputUsuario" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">{i18n.t('users-panel.usr_name')}</label>
                        <input required name="first_name" onChange={onChange} type="text" value={usuario.first_name} className="form-control" id="inputNombre" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputApellido">{i18n.t('users-panel.usr_last-name')}</label>
                        <input required name="last_name" onChange={onChange} type="text" value={usuario.last_name} className="form-control" id="inputApellido" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">{i18n.t('users-panel.usr_email')}</label>
                        <input required name='email' type="email" onChange={onChange} className="form-control" value={usuario.email} id="inputEmail" placeholder="name@example.com" />
                    </div>
                </div>
                {mostrarFormulario()}
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPerfil">{i18n.t('users-panel.usr_type')}</label>
                        <select onChange={onChange} name="tipo_usuario" id="inputPerfil" className="custom-select" >
                            <option >--- </option>
                            <option >Gerente</option>
                            <option >Administrador</option>
                            <option >Operador</option>
                        </select>
                    </div>
                </div>
                <br /><br />
                <div className="form-row">
                    <button type="submit" className="btn btn-primary mx-auto d-block col-md-5" >{i18n.t(nameBtn)}</button>
                    <button onClick={props.cancelar} className="btn btn-danger mx-auto d-block col-md-5">{i18n.t('users-panel.usr_btn-cancelar')}</button>
                </div>
            </form>
            <br /><br />
        </div>

    )

}


export default ModificarUse

