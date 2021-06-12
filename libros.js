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
;


//declara array de cargar las compras
let carritoLibros = [];

let miTabla = document.createElement("table");
miTabla.setAttribute("class", "table table-dark");
let tablaContenedor = document.createElement("tbody")
let verListado = document.getElementById('verLibros')

vaciarCarrito = () => {
    carritoLibros = []}


const creaElementos = () => {
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
    tablaContenedor.appendChild(fila);
    miTabla.appendChild(tablaContenedor);
    verListado.appendChild(miTabla);
     

})
}







verCarrito = () => {
        creaElementos();
        let finPagina = document.getElementById('compra')
        let botonFinalizar = document.createElement('div');
        botonFinalizar.innerHTML = `<div class='btn btn-primary'> Finalizar Compra</div>`;
        finPagina.appendChild(botonFinalizar);
        botonFinalizar.addEventListener('click', () => {
            let total = 0;
            carritoLibros.forEach ( libro => { 
                total += libro.precio;
                verListado.innerHTML = '';
                librosAgregados(); //función para enviar los libros al storage Session
                })
                vaciarCarrito();
                finPagina.removeChild(botonFinalizar);
                   
                if (total>1000){
                 let descuentoCompra = total*0.90 ; //forma de calcular el 10% en lugar de regla de 3 simples
                    console.log ("Por el monto de tu compra te hicimos un descuento del 10% quedando el total $ " + descuentoCompra)
                                } 
                else{
        console.log ("El precio total de su compra es $ "+total )
                        }
                    })
                }
