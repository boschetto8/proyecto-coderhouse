arrayDeContactos = [];

class Contacto {
 constructor (nombre, email, direccion, mensaje){
     this.nombre = nombre, 
     this.email = email,
     this.direccion = direccion,
     this.mensaje = mensaje
 }

}

contactoPrevio = new Contacto ("Juan", "juan@gmail.com","Calle falsa 123", "")
arrayDeContactos.push(contactoPrevio);



    //esta función va a tomar a través de prompt y luego reflejarlos en los input (a futuro la idea es que directamente de los input pase con un boton al storage)
cargarContacto = () => { 
const nombre = document.getElementById("nombre");
const email =  document.getElementById("correo").value;
const direccion = document.getElementById("direccion").value;
const mensaje =  document.getElementById("mensaje").value;

let newContact = new Contacto (nombre, email, direccion, mensaje);
arrayDeContactos.push(newContact)
return newContact;

}

/*

//acá agregamos el boton que nos va a abrir el prompt para la carga de contactos (a futuro la idea es que suceda directamente con los campos del input)
let botonCargar = document.createElement("button");
botonCargar.innerText = "Cargar datos";
botonCargar.style.border= "4px solid lightblue";
botonCargar.style.backgroundColor = "grey" 
botonCargar.type = "button";
botonCargar.setAttribute("onclick", "cargarContacto()")
form.appendChild(botonCargar);
*/

//este boton enviara los datos al storage Local(cuando se cargue a través del input es el campo que quedará). Laura dijo que en la clase entrante veremos el tema de anidar formularios con el storage
const form = document.getElementById('formu2');
const botonEnviarContacto = document.createElement("button");
botonEnviarContacto.innerText = "Enviar";
botonEnviarContacto.style.border= "4px solid lightblue";
botonEnviarContacto.style.backgroundColor = "grey" ;

form.appendChild(botonEnviarContacto);
botonEnviarContacto.setAttribute("onclick", "cargarContacto")
guardarLocal = (clave, valor) => { localStorage.setItem (clave, valor)};

console.log(arrayDeContactos)

//ESTA FUNCIÓN ENVIA EL DATO DEL CONTACTO AL LOCAL STORAGE (CARGADO ANTERIORMENTE)
enviarDatosContacto = () => {
    guardarLocal('Contacto local', JSON.stringify(arrayDeContactos));
   console.log ()

}



