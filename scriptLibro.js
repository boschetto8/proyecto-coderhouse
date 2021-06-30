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


mostrarLibro (){
    console.log ("Este libro "+ this.nombre+ " tiene un valor de $ " +this.precio)
}
 
}

//Tomamos del HTML un ID para generar etiquetas dinamicas
const seccion = document.getElementById("articulos");
//A través de un JSON estático incorporamos las CARDS al HTML dinámico

let URLJSON = 'libros.json'
  $.getJSON(URLJSON, function (respuesta, estado){
        if (estado == 'success'){
            console.log ('cargar cards')
respuesta.arrayLibros.forEach (libro => {
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

//Función para agregar items al carrito
let botonComprar = document.getElementById ("id-"+libro.id);
botonComprar.addEventListener('click', () => {
    console.log(`Se agrego al carrito ${libro.nombre} que tiene un precio de $ ${libro.precio}` )
    carritoLibros.push(libro)});



        
    })}

})
       
 // constante para crear en el storage un session de la compra
    const guardarTemporal = (clave, valor) => {sessionStorage.setItem(clave, valor)};
//Agregar al Session Storage los libros del carrito
    librosAgregados = () => {
        guardarTemporal ('book', JSON.stringify(carritoFinal))
    };

