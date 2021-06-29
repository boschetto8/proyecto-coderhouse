
//Array de libros
/*let arrayLibros = [
    {   id:0, 
        nombre: "Mi planta naranja lima", 
        autor:"jose mauro de vasconcelos", 
        precio: 1200, 
        descripcion:"Este libro describe como un niño a través de sus experiencias va asumiendo las consecuencias de su vida",
        imagen: 'https://tiendaeureka.com.ar/wp-content/uploads/2020/08/mi-planta-de-naranja-lima.jpg'
    },
    {   id:1, 
        nombre: "El principito", 
        autor:"Antoine de Saint-Exupéry", 
        precio: 980, 
        descripcion:"El principito trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.",
        imagen: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788478887194.jpg'
    },
    {   id:2, 
        nombre: "Los hermanos Karamazov", 
        autor:"Fiodor Dotoievski", 
        precio: 1360, 
        descripcion:"Los hermanos Karamazov es una novela filosófica y psicológica ambientada en la Rusia del siglo XIX, que entra profundamente en los debates éticos de Dios, el libre albedrío y la moralidad.",
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/51bMDQ4iVsL._SX342_SY445_QL70_ML2_.jpg'
    }
]*/
;
let carritoLibros = [];
let carritoFinal = [];
$(window).on('load', () => {
    console.log('Pagina cargada');
    



//declara array de cargar las compras


let miTabla = document.createElement("table");
miTabla.setAttribute("class", "table table-dark");
let tablaContenedor = document.createElement("tbody")
let verListado = document.getElementById('verLibros')


let creaElementos = () => {
 carritoLibros.forEach (libro => {
    //Creación de tabla dinámica con los elementos del carrito
    let fila = document.createElement("tr");
    let celda = document.createElement("td");
    celda.innerText = libro.nombre;
    fila.appendChild(celda);
    let celda2 = document.createElement("td");
    celda2.innerText = libro.autor;
    fila.appendChild(celda2);
    let celda3 = document.createElement("td");
    celda3.innerHTML = libro.precio;
    fila.appendChild(celda3);
    let celda4 = document.createElement ('td');
    let botonRemover = document.createElement ('div');
    botonRemover.innerHTML = `<div class="mbr-section-btn"><a class="btn btn-danger display-8" id="id-${libro.id}">Remover</a></div>`;
    celda4.appendChild(botonRemover);
    fila.appendChild(celda4);
    //Este evento al darle Click remueve de la lista y quita del array el elemento removido
    botonRemover.addEventListener('click', () => {
    fila.parentNode.removeChild(fila);
    const final = carritoLibros.filter (c => c.id != libro.id);
     // acá filtramos el boton que dejamos de tocar
    final.forEach (final => {
    carritoFinal.push   (final)});
    console.log (carritoFinal);
    librosAgregados(); //función para enviar los libros al storage Session
    
}); 
    tablaContenedor.appendChild(fila);
    miTabla.appendChild(tablaContenedor);
   verListado.appendChild(miTabla);
   
   
})}
// traemos el div fuera de la función para que aplique en las primeras lineas de la función
let finPagina = $('#compra');

verCarrito = () => {    
        tablaContenedor.innerHTML= '';
        finPagina.innerHTML= '';             
       creaElementos();
      // let botonFinalizar = document.createElement('div');
       $('#compra').append(`<div class='btn btn-primary' id='botonFinalizar'> Finalizar Compra
       
       </div>`);
       let total = 0;
        $('#botonFinalizar').on('click', () => {
                    if (carritoFinal.length>0){
                    carritoFinal.forEach ( libro => { 
                    total += libro.precio;
                    })}
                    else {
                        carritoLibros.forEach ( libro => { 
                            total += libro.precio;
                    })}

                renderizarCarrito();
                $('#botonFinalizar').remove();
                
                              
                if (total>1000){
                 let descuentoCompra = total*0.90 ; //forma de calcular el 10% en lugar de regla de 3 simples
                    console.log ("Por el monto de tu compra te hicimos un descuento del 10% quedando el total $ " + descuentoCompra)
                                } 
                else{
        console.log ("El precio total de su compra es $ "+total )
                        }
                    
                    })}
                
                
                    

renderizarCarrito = () => {
    carritoFinal = [];
    carritoLibros = [];
    miTabla.innerHTML = '';

}

})


    