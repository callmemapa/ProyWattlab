import Swal from'sweetalert2';

export default class alerta{
    constructor() { }
    
    exito () {Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
      })}

      error () {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
      }

      
    }