class Libro {
    constructor(titulo,autor,pCompra,pVenta,estado,stock) {
        this.titulo = titulo;
        this.autor = autor;
        this.pCompra = parseInt(pCompra,10);
        this.pVenta = parseInt(pVenta,10);
        this.estado = estado;
        this.stock = stock;
    } 
}

let titulo = document.getElementById("tituloLibro");
let autor = document.getElementById("autorLibro");
let pVenta = document.getElementById("precioVenta");
let pCompra = document.getElementById("precioCompra");
let estado = document.getElementById("estadoLibro");
let cantidadUnidades = document.getElementById("cantidadUnidades");

let catalogo = [];

let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    
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
        if(error === false) { //Si todo está bien, agrego el nuevo libro    
            nuevoLibro();   
        }        
        if(error == true){ //Si algo está mal, no dejo que se envíe 
            console.log("Algún dato fue ingresado incorrectamente");
            e.preventDefault();
        }
    }
    checkForm();
})

//Agregar un new Libro al array catálogo
const nuevoLibro = ()=> { 
    const nuevoLibro = new Libro(titulo.value, autor.value, pCompra.value, pVenta.value, estado.value);
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
const mostrarCatalogo = ()=> {
    let catalogo = JSON.parse(localStorage.getItem("Libreria"));
    let tr = document.querySelectorAll(".tr");

    for(let i = 0, j = tr.length; i < j; i++) {
        tr[i].remove()
    }

    for (itemLibro in catalogo){
        let datosLibro = catalogo[itemLibro];
        let titulo = datosLibro["titulo"];
        let autor = datosLibro["autor"];
        let pCompra = datosLibro["pCompra"];
        let pVenta = datosLibro["pVenta"];
        let stock = datosLibro["stock"];
        let htmlTabla = `
        <tr class="tr">
        <td>${titulo}</td>
        <td>${autor}</td>
        <td>${pCompra}</td>
        <td>${pVenta}</td>
        <td>${stock}</td>
        </tr>`
        document.querySelector(".tbody").innerHTML += htmlTabla;
    }
}




   


     // setStock() {
    //     let stockIni = 0;
    //     let unidadesAdd = parseInt(document.getElementById("cantidadUnidades").value,10);
    //     this.stock = stockIni + unidadesAdd;
    //     console.log(this.stock);
    // }


