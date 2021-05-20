let cantLibros = parseInt (prompt("Cuantos libros deseas comprar?"))

let libro1 = parseFloat (prompt("¿Cuánto cuesta el primer libro que quieres comprar?"))
let libro2 = parseFloat (prompt("¿Cuánto cuesta el segundo libro que quieres comprar?"))

// acá se sumarían el costo de los libros agregados en el promt por el usuario

sumarLibros = (primerLibro, segundoLibro) => {
    let sumando = primerLibro + segundoLibro
    return sumando
}
/*
 acá me gustaría que en la funcion de arriba desarrollar un proceso que según la cantidad de libros que se pongan en el carrito sea la suma del mismo, intente algo como lo de abajo pero no me respondia
 
let sumarLibros= 0;
let libro;
for (let i=1; i >= cantLibros; i++){
    let libro = parseInt (prompt("¿Cuanto cuesta el libro "+i+ " que desas comprar?"));
    let sumarLibros = sumarLibros + libro
    
}
*/

let compra = sumarLibros (libro1, libro2);
console.log ('Haz efectuado la compra de los libros. La misma te salió $ '+compra )

//descuento en compras mayores a $1000
if (compra>1000){
    let descuentoCompra = compra*0.90 ; //forma de calcular el 10% en lugar de regla de 3 simples
    console.log ("Por el monto de tu compra te hicimos un descuento del 10% quedando el total $ " +descuentoCompra)
}
else {
    console.log ("Muchas gracias por su compra! Su monto no cuenta con reintegro")
}






