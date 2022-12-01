class Producto{
    constructor(id, nombreproducto, fechaExp, precio, imagen){
        this.id = id
        this.nombreproducto = nombreproducto
        this.fechaExp = fechaExp
        this.precio = precio
        this.imagen = imagen
    }
}

class Ofertas{
    constructor(titulo, precios){
        this.titulo = titulo,
        this.precios = precios
    }
}

const producto1 = new Producto(1, "Arroz", 2023, 215, "arroz.jpg")
const producto2 = new Producto(2, "Pollo", 2022, 315, "pollo.jpg")
const producto3 = new Producto(3, "Fideos", 2023, 125, "fideos.jpg")
const producto4 = new Producto(4, "galletitas", 2022, 425, "galletitas.jpg")
const producto5 = new Producto(5, "Fideos Mattarazzo", 2023, 170, "fideos-matarazzo.jpg")
const producto6 = new Producto(6, "Fideos Luchetti", 2023, 150, "fideos-luchetti.jpg")
const producto7 = new Producto(7, "Fideos Don Vicente", 2023, 200, "fideos-donvicente.jpg")
const producto8 = new Producto(8, "Arroz Apostoles", 2023, 150, "arroz-apostoles.jpg")
const producto9 = new Producto(9, "Arroz dos hermanos", 2023, 175, "arrozdoshermanos.jpg")
const producto10 = new Producto(10, "Carne", 2022, 400, "carne.jpg")
const producto11 = new Producto(11, "Galletitas surtidas Terrabusi", 2023, 325, "galletitas-surtidas-terrabusi.jpg")
const producto12 = new Producto(12, "Galletitas surtidas Bagley", 2023, 350, "galletitas-surtidas.jpg")
const producto13 = new Producto(13, "Galletitas Oreo", 2023, 405, "oreos.jpg")
const producto14 = new Producto(14, "Galletitas Toddy", 2023, 365, "toddy.jpg")
const producto15 = new Producto(15, "Chocolate Block 1kg", 2023, 700, "chocolate-block.jpg")
const producto16 = new Producto(16, "Chocolate Milka Oreo", 2023, 650, "chocolate-milkaoreo.jpg")
const producto17 = new Producto(17, "Chocolate Kit Kat", 2023, 550, "chocolate-kitkat.jpg")
const producto18 = new Producto(18, "Chocolate Shot", 2023, 550, "chocolate-shot.jpg")
const producto19 = new Producto(19, "Caramelos Confitados Sugus", 2023, 335, "caramelos-confitadossugus.jpg")
const producto20 = new Producto(20, "Caramelos Extreme Sugus", 2023, 370, "caramelos-extreme.jpg")
const producto21 = new Producto(21, "Chupetines Pico Dulce", 2023, 150, "caramelos-picodulce.jpg")

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12,producto13,producto14,producto15,producto16, producto17, producto18, producto19, producto20, producto21]
let carrito = []


if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


// CAPTURAS DEL DOM
let BtnMostrarCatalogo = document.getElementById("botonMostrar")
let divProductos = document.getElementById("divProductos")
let BtnAgregarCarrito = document.getElementById("agregarAlCarrito")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")
// EVENTOS
BtnMostrarCatalogo.addEventListener("click", ()=>{mostrarCatalogo(listaProductos)})
BtnAgregarCarrito.addEventListener("click", ()=>{agregarAlCarrito(carrito)})
botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(carrito)})



//FUNCIONES DEL PROYECTO

console.log(listaProductos)

//Funcion para crear los productos en el HTML

let Mostrar = false
function mostrarCatalogo(array){
    let Mostrar = true
    divProductos.innerHTML = ""
    for(let producto of array){ 
        let crearProducto = document.createElement("div")
        crearProducto.innerHTML = `<div id="${producto.id}" class="card" style="width: 18rem;">
                                    <img class="card-img-top img-fluid" style="height: 200px;"src="imgs/${producto.imagen}" alt="${producto.nombreproducto}">
                                    <div class="card-body">
                                        <h4 class="card-title">${producto.nombreproducto}</h4>
                                        <p class="">Precio: ${producto.precio}</p>
                                    <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                    </div>
    </div>`
        divProductos.appendChild(crearProducto)
        let btnAgregar = document.getElementById(`agregarBtn${producto.id}`)
        console.log(btnAgregar)
        btnAgregar.addEventListener("click", ()=>{
            agregarAlCarrito(producto)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu producto se agrego al carrito',
                showConfirmButton: false,
                timer: 1000
              })
        })
    }
}


function agregarAlCarrito(producto){
    carrito.push(producto)
    console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


const oferta1 = new Ofertas("Oferta Por La Rafiki", "1200")
const oferta2 = new Ofertas("Oferta Por La Donkey Kong", "1240")
let Oferton = [oferta1, oferta2]


function llamarOfertas(resultado){
    return new Promise((res, rej)=>{
        if(resultado){
            res(Ofertones)
        }else{
            rej("No se pudo encontrar ofertas")
        }
    })
}

llamarOfertas()