class Libro {
    constructor(titulo,autor,pCompra,pVenta,estado,stock,imgUrl) {
        this.titulo = titulo;
        this.autor = autor;
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
        if(error === false) { //Si todo está bien, agrego el nuevo libro    
            nuevoLibro();   
            form.reset();
        }        
        if(error == true){ //Si algo está mal, no dejo que se envíe 
            window.alert("Algún dato fue ingresado incorrectamente");
            
        }
    }
    checkForm();
})

//Agregar un new Libro al array catálogo
const nuevoLibro = ()=> { 
    const nuevoLibro = new Libro(titulo.value, autor.value, pCompra.value, pVenta.value, estado.value, cantidadUnidades.value,imgUrl.value);
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
document.getElementById("showCatalogo").addEventListener("click", ()=> {
    
    let catalogo = JSON.parse(localStorage.getItem("Libreria"));
    let tr = document.querySelectorAll(".tr");
    
    for(let i = 0, j = tr.length; i < j; i++) {
        tr[i].remove()
    }
    
    for (item of catalogo) {

        let htmlTabla = `
        
        <tr class="tr">
        
        <td>${item.titulo}</td>
        
        <td>${item.autor}</td>
        
        <td>${item.pCompra}</td>
        
        <td>${item.pVenta}</td>
        
        <td>${item.stock}</td>

        <td style="display: none">${item.estado}</td>

        <td style="display: none">${item.imgUrl}</td>
        
        </tr>`;
        
        document.querySelector(".tbody").innerHTML += htmlTabla;
        
    }
})









// //Encontrar una manera de que compare todo el item (tanto nombre como autor, $ y estado) y si son iguales sume el stock
// let existsInStock = ()=> {
//     let inStock = JSON.parse(localStorage.getItem("Libreria"));
//     for (item of inStock) {
//         if (item["titulo"] === "h"){
//            console.log(item)
//         }
//     }
// }

   


     // setStock() {
    //     let stockIni = 0;
    //     let unidadesAdd = parseInt(document.getElementById("cantidadUnidades").value,10);
    //     this.stock = stockIni + unidadesAdd;
    //     console.log(this.stock);
    // }



