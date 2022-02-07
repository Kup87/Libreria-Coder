class Libro {
    constructor(titulo,autor,pCompra,pVenta,estado,stock,imgUrl) {
        this.titulo = titulo.toUpperCase();
        this.autor = autor.toUpperCase();
        this.pCompra = parseInt(pCompra,10);
        this.pVenta = parseInt(pVenta,10);
        this.estado = estado;
        this.stock = stock;
        this.imgUrl = imgUrl;
    } 
}

let titulo = document.getElementById("tituloLibro");
let autor = document.getElementById("autorLibro");
let pVenta = document.getElementById("precioVenta");
let pCompra = document.getElementById("precioCompra");
let estado = document.getElementById("estadoLibro");
let cantidadUnidades = document.getElementById("cantidadUnidades");
let imgUrl = document.getElementById("imagenPortada");

let catalogo = [];

let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const checkForm = () => {
        let error = false;
        
        if (titulo.value === ""){
            destacarError(titulo);
            error = true;} else {
            limpiarError(titulo);
        }
        if (autor.value === ""){
            destacarError(autor)
            error = true;}  else {
            limpiarError(autor);
        }  
        if (isNaN(pCompra.value) || pCompra.value === "" || pCompra.value <= 0){
            destacarError(pCompra);
            error = true;} else {
            limpiarError(pCompra);
        }       
        if (estado.value === ""){
            destacarError(estado);
            error = true;} else {
            limpiarError(estado);
        }  
        if (isNaN(cantidadUnidades.value) || cantidadUnidades.value === "" ){
            destacarError(cantidadUnidades);
            error = true;} else {
            limpiarError(cantidadUnidades);
        }       
        if(error === false) { //Si todo está bien, agrego el nuevo libro    
            fNuevoLibro();   
            form.reset();
        }     
        if(error == true){ //Si algo está mal, no dejo que se envíe 
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algún dato fue ingresado incorrectamente'
            })
        }
    }
    
    checkForm();
    
})

//Agregar un new Libro al array catálogo
let nuevoLibro;
const fNuevoLibro = ()=> { 
    nuevoLibro = new Libro(titulo.value, autor.value, pCompra.value, pVenta.value, estado.value, cantidadUnidades.value,imgUrl.value);
    setStock(); //Stock.js
    catalogo.push(nuevoLibro);
    let Libreria = JSON.parse(localStorage.getItem("Libreria"));//Guardarlo de forma local
    if (Libreria == null){
        localStorage.setItem("Libreria", JSON.stringify(catalogo));
    } else {
        Libreria.push(nuevoLibro);
        localStorage.setItem("Libreria", JSON.stringify(Libreria));
    }
}

//Agregar o quitar la clase CSS "requiered"
const destacarError = (o) => {
    o.classList.add("requiered");
    o.placeholder = "Es necesario completar este campo";
}

const limpiarError = (o) => {
    o.classList.remove("requiered");
}

//Mostrar el catálogo por tabla
$("#showCatalogo").on("click", ()=> {
    showCatalogo();
})






