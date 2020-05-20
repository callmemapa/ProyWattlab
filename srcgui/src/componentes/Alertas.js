import React, { Component } from 'react';
import Swal from 'sweetalert2';

export default class alerta{
    constructor() {
    }

    exito () {
    	Swal.fire({
    		position: 'center',
        	icon: 'success',
        	title: 'Your work has been saved',
        	showConfirmButton: false,
        	timer: 2000
        })
    }

    error () {
    	Swal.fire({
    		icon: 'error',
        	title: 'Oops...',
        	text: 'Something went wrong!',
        })
    }
	captcha() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: 'Porfavor, confirma captcha'
    })
  	}
  	publicidad() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Anuncio',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
	transferenciaBancaria () { // ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
		var strRespuesta1, strRespuesta2, strRespuesta3;
		const tfBancaria = (async () => {
			// Selección del tipo de pago a realizar (equivalente a etiqueta <select> & <option>)
			const { value: tipoPago } = await Swal.fire({
				title: 'Seleccione un tipo de pago',
			  	input: 'select',
			  	inputOptions: {
			  		efectivo: 'Efectivo',
			    	transfBancaria: 'Transferencia bancaria'
			    },
			    inputPlaceholder: 'Tipo de pago...',
			  	showCancelButton: true,
			  	cancelButtonColor: '#d33',

			  	// Función que valida la opción seleccionada.
			  	inputValidator: (value) => {
			  		return new Promise((resolve) => {
			  			if (value === 'transfBancaria') { // Si se selecciónó 'Transferencia bancaria'.
			  				// var strRespuesta1, strRespuesta2, strRespuesta3;
			  				Swal.mixin({
			  					input: 'text',
					  			confirmButtonText: 'Siguiente',
					  			showCancelButton: true,
								cancelButtonText: 'Cancelar',
								cancelButtonColor: '#d33',
								progressSteps: ['1', '2', '3'] // Número de datos a guardar en la cola.
							}).queue([ // Cola que pedirá los datos y los almacenará.
								{
									title: 'Paso 1: Número de la tarjeta',
						    		text: 'Ingrese los 15 dígitos de la tarjeta (incluyendo los guiones)',
						    		preConfirm: function(value) {
						    			strRespuesta1 = value;
						    		}
						    	},
						    	{
						    		title: 'Paso 2: Clave tarjeta',
						  			text: 'Ingrese la clave de la tarjeta',
						  			input: 'password',
						    		preConfirm: function(value) {
						    			strRespuesta2 = value;
						    		}
						  		},
						    	{
						    		title: 'Paso 3: Valor a pagar',
						  			text: 'Ingrese el valor a pagar (sin simbolos ni espacios)',
						    		preConfirm: function(value) {
						    			strRespuesta3 = value;
						    		}
						  		}
					  		]).then((result) => { // Aquí se muestran los datos ingresados en la cola.
					  			if (result.value) {
					  				//const answers = JSON.stringify(result.value)
					  				Swal.fire({
					  					title: 'Datos',
					  					html:
					  						'Los datos que has ingresado son:' +
					  							JSON.stringify(result) +
					  							'<br></br>' +
					  							'<pre>Respuesta 1: ' + strRespuesta1 +
					  							'<pre>Respuesta 2: ' + strRespuesta2 +
					  							'<pre>Respuesta 3: ' + strRespuesta3 +
					  							'</pre>',
					  					confirmButtonText: 'Aceptar'
					  				}).then((result) => { // Confirmación para decidir si se realiza la transferencia.
					  					Swal.fire({
					  						title: 'Realizar transferencia',
								  			text: "¿Está seguro(a) que desea realizar la transferencia?",
								  			icon: 'warning',
								  			showCancelButton: true,
											cancelButtonText: 'Cancelar',
											cancelButtonColor: '#d33',
								  			confirmButtonText: 'Confirmar',
								  			confirmButtonColor: '#3085d6'
								  		}).then((result) => {
								  			// Se evaluá la decisión tomada 'Confirmar' o 'Cancelar'.
								  			if (result.value) { // Si se confirmó la operación.
								  				// Aquí se empieza a realizar la transferencia...
								  				const Toast = Swal.mixin({
								  					toast: true,
												  	position: 'top-center',
												  	showConfirmButton: false,
												  	timer: 8000,
												  	timerProgressBar: true,
												  	onOpen: (toast) => {
												  		toast.addEventListener('mouseenter', Swal.stopTimer)
												    	toast.addEventListener('mouseleave', Swal.resumeTimer)
												    }
												})
												Toast.fire({
												  icon: 'info',
												  title: 'Transfiriendo',
												  text: 'La transferencia se está realizando...'
												}).then((result) => {
													// Aquí en este punto, la transferencia es ¡exitosa!
													/* NOTA: Sería bueno agregar una condición, en caso de
															que la transferencia falle.*/
								  					Swal.fire(
								  						'¡Transferencia realizada!',
								  						'La transferencia se ha realizado exitosamente.',
								  						'success'
								  					)
								  				})
								  				// return
								  			} else { // Si se canceló la operación.
								  				Swal.fire({
								  					icon: 'info',
								  					title: '¡Transferencia cancelada!',
								  					text: 'La transferencia ha sido cancelada.'
								  				})
								  			}
								  		})
								  	})
					  			}
					  		})
					  		resolve()
					  	} else { // Si se selección pago en 'Efectivo'.
					  		resolve(
					  			Swal.fire({
					  				position: 'top-center',
					  				icon: 'success',
					  				title: '¡Se ha seleccionado pago en efectivo!',
					  				text: "Por favor, ingresar el valor pagado en la casilla de 'Valor pagado'.",
					  				showConfirmButton: true,
					  				confirmButtonText: 'Aceptar',
					  				confirmButtonColor: '#3085d6'
					  			})
					  		)
					  	}
					})
			  	}
			})
			if (tipoPago) { // Almacena el tipo de pago.
				Swal.fire(`Datos ingresados: ${tipoPago}`)
			}
		})()
	}
}