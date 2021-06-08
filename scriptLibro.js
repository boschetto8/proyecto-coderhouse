//constructor de creación de libros

class Libros {
    constructor (id, nombre, autor, precio, descripcion,imagen){
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.autor = autor.toLowerCase();
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen
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

//Array de libros
let arrayLibros = [
    {   id:0, 
        nombre: "Mi planta naranja lima", 
        autor:"jose mauro de vasconcelos", 
        precio: 300, 
        descripcion:"Este libro describe como un niño a través de sus experiencias va asumiendo las consecuencias de su vida",
        imagen: 'https://tiendaeureka.com.ar/wp-content/uploads/2020/08/mi-planta-de-naranja-lima.jpg'
    },
    {   id:1, 
        nombre: "El principito", 
        autor:"Antoine de Saint-Exupéry", 
        precio: 350, 
        descripcion:"El principito trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.",
        imagen: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788478887194.jpg'
    },
    {   id:2, 
        nombre: "Los hermanos Karamazov", 
        autor:"Fiodor Dotoievski", 
        precio: 260, 
        descripcion:"Los hermanos Karamazov es una novela filosófica y psicológica ambientada en la Rusia del siglo XIX, que entra profundamente en los debates éticos de Dios, el libre albedrío y la moralidad.",
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/51bMDQ4iVsL._SX342_SY445_QL70_ML2_.jpg'
    }
]


//declara array de cargar las compras
let carritoLibros = [];

arrayLibros.forEach(element => {
   console.log(element.precio)
});

//Recorremos los libros que tenemos en el ARRAY
for (item of arrayLibros){
console.log("del libro " +item.nombre+ " el ID es " +item.id+ " y tiene un precio de $" +item.precio)}

console.log(arrayLibros)

//Tomamos del HTML un ID para generar etiquetas dinamicas
const seccion = document.getElementById("articulos");
//A través de un ForEach vamos creando dinamicamente todos los componentes/cards
arrayLibros.forEach (libro => {
const crearArticulo = document.createElement("div");
crearArticulo.innerHTML = `
            <div class="card-wrapper">
                <div class="row align-items-center">
                    <div class="col-12 col-md-4">
                        <div class="image-wrapper">
                            <img src="${libro.imagen}" alt="${libro.nombre}">
                        </div>
                    </div>
                    <div class="col-12 col-md">
                        <div class="card-box">
                            <div class="row">
                                <div class="col-md">
                                    <h6 class="card-title mbr-fonts-style display-5">
                                        <strong>${libro.nombre}</strong></h6>
                                    <p class="mbr-text mbr-fonts-style display-7">${libro.descripcion}</p>
                                </div>
                                <div class="col-md-auto">
                                    <p class="price mbr-fonts-style display-2">$${libro.precio}</p>
                                    <div class="mbr-section-btn"><a class="btn btn-primary display-4" id="id-${libro.id}">Comprar</a></div>
                                </div>`;                              
articulos.appendChild(crearArticulo);

//Función para agregar items al carrito (declarando la función fuera o dentro del AddEvent me daba error y no me cargaba los componentes siguientes por eso lo cargue de esta forma)
let botonComprar = document.getElementById ("id-"+libro.id);
botonComprar.addEventListener('click', () => {
    console.log("Se agrego al carrito el libro "+libro.nombre +" que tiene un precio de $ "+libro.precio )
    carritoLibros.push(libro)});
       
 // constante para crear en el storage un session de la compra
    const guardarTemporal = (clave, valor) => {sessionStorage.setItem(clave, valor)};
//Agregar al Session Storage los libros del carrito
    librosAgregados = () => {
        guardarTemporal ('book', JSON.stringify(carritoLibros))
    }
    })


verCarrito = () => {
    let total = 0;
    carritoLibros.forEach ( e => { 
        total += e.precio;})       

        if (total>1000){
         let descuentoCompra = total*0.90 ; //forma de calcular el 10% en lugar de regla de 3 simples
            console.log ("Por el monto de tu compra te hicimos un descuento del 10% quedando el total $ " + descuentoCompra)
                        } 
        else{
console.log ("El precio total de su compra es $ "+total )
                }
    librosAgregados();
    }













