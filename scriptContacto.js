arrayDeContactos = []

class Contacto {
 constructor (nombre, email, direccion, mensaje){
     this.nombre = nombre, 
     this.email = email,
     this.direccion = direccion,
     this.mensaje = mensaje
 }

}



let nombre = prompt("Cual es su nombre?");
let email = prompt("Cual es su correo electronico?");
let direccion = prompt("Cual es su direccion?");
let mensaje = prompt("Deje un mensaje para la pagina");
contacto1 = new Contacto (nombre, email, direccion, mensaje);

agregarArrayDeContacto = (cont) => {
arrayDeContactos.push (cont)
};

agregarArrayDeContacto(contacto1);

console.log (contacto1);