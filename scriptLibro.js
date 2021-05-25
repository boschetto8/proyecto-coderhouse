
let cantLibros = parseInt (prompt("Cuantos libros deseas comprar?"))

// Acumulador de compra
let compra = 0

// Funcion par añadir valor a compra
const sumarLibros = (adicional) => {
    compra += adicional
}

// Repito por cada libro ingresado
for(let i = 1; i <= cantLibros; i++){
    let libro = parseFloat (prompt("¿Cuánto cuesta el libro nro" + i + "?"))
    sumarLibros(libro)
}

//descuento en compras mayores a $1000
if ( compra >1000){
    let descuentoCompra = compra*0.90 ; //forma de calcular el 10% en lugar de regla de 3 simples
    console.log ("Por el monto de tu compra te hicimos un descuento del 10% quedando el total $ " + descuentoCompra)
}
else {
    console.log ('Haz efectuado la compra de los libros. La misma te salió $ '+ compra )
}


//constructor de creación de libros

class Libros {
    constructor (id, nombre, autor, precio, descripcion){
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.autor = autor.toLowerCase();
        this.precio = precio;
        this.descripcion = descripcion;
        this.vendido = false
    }
aumentarLibro (){
  this.precio *=  1.10
}
venderLibro () {
    this.vendido = true
}
enviarDomicilio (){
    this.precio += 300
}
mostrarLibro (){
    console.log ("Este libro "+ this.nombre+ " tiene un valor de $ " +this.precio)
}
 
 

}

//creación de libros

const libro1 = new Libros (1, "Mi planta naranja lima", "jose mauro de vasconcelos", 300, "Este libro describe como un niño a través de sus experiencias va asumiendo las consecuencias de su vida" );
libro1.mostrarLibro();

const libro2 = new Libros (2, "El principito", "Antoine de Saint-Exupéry" , 350, "El principito trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.");

const libro3 = new Libros (3, "Los hermanos Karamazov"," fiodor dotoievski", 260, "Los hermanos Karamazov es una novela filosófica y psicológica ambientada en la Rusia del siglo XIX, que entra profundamente en los debates éticos de Dios, el libre albedrío y la moralidad.");

console.log (libro1)
console.log (libro2)
console.log (libro3)

libro2.aumentarLibro();
console.log(libro2);


libro2.venderLibro();
console.log(libro2);


arrayLibros = [];


agregarLibrosAlArray = (item) => {
    arrayLibros.push (item)
};
agregarLibrosAlArray(libro1);
agregarLibrosAlArray(libro2);
agregarLibrosAlArray(libro3);


alert ("Ingresa tu libro así ampliamos nuestra stock")
let id2 = parseInt(prompt("Ingrese ID de su libro a ingresar"));
let nombre2 = prompt ("Ingrese nombre de su libro");
let autor2 = prompt ("Ingrese nombre del autor del libro");
let precio2= parseFloat(prompt("Ingrese precio de su libro"));
let descripcion2 = prompt ("Ingrese descripción de su libro");



let newBook = new Libros (id2, nombre2, autor2, precio2, descripcion2);

console.log (newBook)


agregarLibrosAlArray(newBook);

console.log (arrayLibros);


// ordenar libros en array de menor precio a mayor

function ordenarArrayLibros() {
    arrayLibros.sort(function(a, b) {
        return a.precio - b.precio
    });
    }
    
    ordenarArrayLibros();

    console.log (arrayLibros);

//
    for (const item of arrayLibros){
        console.log (item.nombre);
        console.log (item.autor)
    }















