arrayDeContactos = [];

class Contacto {
 constructor (nombre, email, direccion, mensaje){
     this.nombre = nombre, 
     this.email = email,
     this.direccion = direccion,
     this.mensaje = mensaje
 }

}
//esta función va a tomar a través de prompt y luego reflejarlos en los input (a futuro la idea es que directamente de los input pase con un boton al storage)
cargarContacto = () => { 
const nombre = document.getElementById("nombre").value;
const email =  document.getElementById("correo").value;
const direccion = document.getElementById("direccion").value;
const mensaje =  document.getElementById("mensaje").value;

let newContact = new Contacto (nombre, email, direccion, mensaje);
arrayDeContactos.push(newContact)

console.log(newContact)
return newContact;
}

//acá agregamos el boton que nos va a abrir el prompt para la carga de contactos (a futuro la idea es que suceda directamente con los campos del input)

/*
let botonCargar = document.createElement("button");
botonCargar.innerText = "Cargar datos";
botonCargar.style.border= "4px solid lightblue";
botonCargar.style.backgroundColor = "grey" 
botonCargar.type = "button";
botonCargar.setAttribute("onclick", "cargarContacto()")

formu.appendChild(botonCargar);

*/
//ESTA FUNCIÓN ENVIA EL DATO DEL CONTACTO AL LOCAL STORAGE (CARGADO ANTERIORMENTE) 
const envioDatosContacto = () => {
const nombre = document.getElementById("nombre").value;
const email =  document.getElementById("correo").value;
const direccion = document.getElementById("direccion").value;
const mensaje =  document.getElementById("mensaje").value;

let newContact = new Contacto (nombre, email, direccion, mensaje);
arrayDeContactos.push(newContact)

console.log(nombre + ' se envio un correo a la siguiente dirección de email '+email + ' para validar su identidad')
guardarLocal('Contacto local', JSON.stringify(arrayDeContactos));


}

//este boton enviara los datos al storage Local(cuando se cargue a través del input es el campo que quedará). Laura dijo que en la clase entrante veremos el tema de anidar formularios con el storage
const form = document.getElementById('formu');
const botonEnviarContacto = document.createElement("button");
botonEnviarContacto.innerText = "Enviar";
botonEnviarContacto.style.border= "4px solid lightblue";
botonEnviarContacto.style.backgroundColor = "grey" ;
botonEnviarContacto.type = 'button';
formu.appendChild(botonEnviarContacto);
botonEnviarContacto.addEventListener("click", envioDatosContacto)
guardarLocal = (clave, valor) => { localStorage.setItem (clave, valor)};

console.log(arrayDeContactos)

