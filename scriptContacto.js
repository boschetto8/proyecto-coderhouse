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
let envioContacto = document.getElementById('envioExitoso');

//Esta función envia los datos del contacto al Local Storage
const envioDatosContacto = () => {
const nombre= $('#nombre').val();
const correo =$('#correo').val();
const direccion = $('#direccion').val();
const mensaje = $('#mensaje').val();

//comprobaciones que los campos no esten vacios y comprobación de email
if((!nombre == '') && (!correo == '') && (!direccion == '')&& (!mensaje == '')){
if (validarEmail(correo)) {
let newContact = new Contacto (nombre, correo, direccion, mensaje);
arrayDeContactos.push(newContact)


envioContacto.innerHTML = `<h4>${nombre} se envio un correo a la siguiente dirección de email ${correo} para validar su identidad</h4>`
guardarLocal('Contacto local', JSON.stringify(arrayDeContactos));


console.log(nombre+ ' se envio un correo a la siguiente dirección de email '+correo + ' para validar su identidad')
}
else {
    envioContacto.innerHTML =  `<h4>La dirección de correo agregada es incorrecta</h4>`
}}
else {
    envioContacto.innerHTML = `<h4>Debe llenar todos los campos para enviar el correo</h4>`
}

}

//Se crea el boton de envio dinamicamente y se envían los datos al local Storage
$('#formu').append(`<button class='btn btn-primary'  id='botonContacto'>Enviar</button>`)
$('#botonContacto').on('click', envioDatosContacto)






//Guardar datos de contacto en el Local Storage
guardarLocal = (clave, valor) => { localStorage.setItem (clave, valor)};
console.log(arrayDeContactos)
})
//funcion para validar el email
function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     console.log("La dirección de email " + valor + " es correcta!.");
     
    } else {
     console.log("La dirección de email es incorrecta!.");
     return
    }
  }