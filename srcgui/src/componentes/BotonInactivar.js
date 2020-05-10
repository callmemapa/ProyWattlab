import React, { useState,useEffect } from 'react'; 
import { useTranslation } from 'react-i18next';

function BotonInactivar(props) {
    const i18n = useTranslation();

    const [icono,setIcon] = useState(
        {d:'',
         d1:'',
         d2: ''   
        })

    useEffect(() => {
        const mostrarIcono = () =>{
            if(props.nombre==="Inactivar"){       
                setIcon({
                    ...icono,
                    d:'M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z',
                    d1:'M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z',
                    d2:'M13.646 14.354l-12-12 .708-.708 12 12-.708.708z'
                }) 
            }else{
                setIcon({
                    d:'M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
                    d2:'M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z'
                })
            }
        }
        
        mostrarIcono()
        
    }, [props.nombre])
        return (
            <React.Fragment>
            <button type="button" onClick={props.cambiarEstado} className={props.claseBoton} style={{marginBottom: "10px", width: "130px"}}>
                <svg className="bi bi-eye-slash-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d={icono.d}/>
                <path d={icono.d1}/>
                <path fillRule="evenodd" d={icono.d2} clipRule="evenodd"/>
                </svg>
                &nbsp; {i18n.t(props.nombre)}
            </button>
            </React.Fragment>
        );
}

export default BotonInactivar;