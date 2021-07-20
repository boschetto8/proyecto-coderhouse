let carritoLibros = [];
$(window).on('load', () => {
    console.log('Pagina cargada');

//Se crea tabla dinamica para mostrar elementos en el carrito
let miTabla = document.createElement("table");
miTabla.setAttribute("class", "table table-dark");
let tablaContenedor = document.createElement("tbody");
let verListado = document.getElementById('verLibros');


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
    $(`#card-${libro.id}`).toggle() // vuelve a agregar los productos que se borraron de la lista de carrito
    //hacemos un vaciamiento del carrito y lo volvemos a agregar sin el item eliminado
    final.forEach (final => {
    renderizarCarrito();
    carritoLibros.push(final)});
   ;
}); 
    tablaContenedor.appendChild(fila);
    miTabla.appendChild(tablaContenedor);
   verListado.appendChild(miTabla);
   
   
})}
// traemos el div fuera de la función para que aplique en las primeras lineas de la función
let finPagina = $('#compra');

verCarrito = () => { 
    if (carritoLibros.length>0){
       noDuplicar();       
       creaElementos();
       $('#compra').append(`<div class='btn btn-primary' id='botonFinalizar' > Finalizar Compra  </div>`);
       let total = 0;
        $('#botonFinalizar').on('click', () => {
                    carritoLibros.forEach ( libro => { 
                    total += libro.precio;
                    })
                                     
                     
                    if (carritoLibros.length >1){
                        let descuentoCompra = total*0.90 ; //forma de calcular el 10% en lugar de regla de 3 simples
                        let compraConDescuento = document.getElementById('finCompra')
                        compraConDescuento.innerHTML =`<h3>Por llevar mas de un libro te hicimos un descuento del 10% quedando el total $ ${descuentoCompra}</h3>`
                                       } 
                       else{
                           let compraSinDescuento = document.getElementById('finCompra')
                           compraSinDescuento.innerHTML =`<h3>El precio total de su compra es $ ${total} </h3>`
                               }
                  
           
                        renderizarCarrito();
                        noDuplicar()
                    })
    }}
                   
                
                
                    
// borra carrito 
renderizarCarrito = () => {
    carritoLibros = [];
    }
    
// Borra contenido del HTML para que no se duplique la lista de productos agregados
noDuplicar = () => {
$('#botonFinalizar').remove();
tablaContenedor.innerHTML= '';
finPagina.innerHTML= '';    
}
})




    