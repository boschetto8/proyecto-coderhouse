arrayDeContactos = [];

class Contacto {
 constructor (nombre, email, direccion, mensaje){
     this.nombre = nombre, 
     this.email = email,
     this.direccion = direccion,
     this.mensaje = mensaje
 }

}



let nombre1 = prompt("Cual es su nombre?");
let email1 = prompt("Cual es su correo electronico?");
let direccion1 = prompt("Cual es su direccion?");
let mensaje1 = prompt("Deje un mensaje para la pagina");
contacto1 = new Contacto (nombre1, email1, direccion1, mensaje1);

agregarArrayDeContacto = (cont) => {
arrayDeContactos.push (cont)
};

agregarArrayDeContacto(contacto1);

console.log (contacto1);