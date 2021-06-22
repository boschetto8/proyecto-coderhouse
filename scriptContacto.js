$(window).on('load', () => {
console.log('Pagina cargada');

arrayDeContactos = [];

class Contacto {
 constructor (nombre, email, direccion, mensaje){
     this.nombre = nombre, 
     this.email = email,
     this.direccion = direccion,
     this.mensaje = mensaje
 }

}

//ESTA FUNCIÓN ENVIA EL DATO DEL CONTACTO AL LOCAL STORAGE (CARGADO ANTERIORMENTE) 
const envioDatosContacto = () => {
const nombre= $('#nombre').val();
const correo =$('#correo').val();
const direccion = $('#direccion').val();
const mensaje = $('#mensaje').val();

let newContact = new Contacto (nombre, correo, direccion, mensaje);
arrayDeContactos.push(newContact)

console.log(nombre+ ' se envio un correo a la siguiente dirección de email '+correo + ' para validar su identidad')
guardarLocal('Contacto local', JSON.stringify(arrayDeContactos));


}


$('#formu').append(`<button class='btn btn-primary' id='botonContacto'>Enviar 

</button>`)

$('#botonContacto').on('click', envioDatosContacto);


//botonEnviarContacto.addEventListener("click", envioDatosContacto)
guardarLocal = (clave, valor) => { localStorage.setItem (clave, valor)};

console.log(arrayDeContactos)


})