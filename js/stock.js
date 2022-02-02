//Comparar el libro ingresado con las entradas anteriores

let setStock = ()=> {

    let Libreria = JSON.parse(localStorage.getItem("Libreria"));
    if (Libreria !== null){
        for (item of Libreria) {
            if (item["titulo"] == nuevoLibro.titulo){
                console.log(nuevoLibro.titulo);
                console.log(item["titulo"]);
            } else { console.log("no match");}
        }
    }
}

//     if (Libreria !== null){ //Si Libreria == null => Error: no es iterable
//         let catalogo = JSON.parse(localStorage.getItem("Libreria"));

//     
//         // if (item["titulo"] === nuevoLibro.titulo && item["autor"] === nuevoLibro.autor && item["estado"] === nuevoLibro.estado){
//         //     //Hacer que se sumen los stocks y evitar que se cree otra entrada
//         //     // let newSupply = parseInt(cantidadUnidades,10);
//            console.log(item);
//            console.log(item["titulo"]);
//            console.log(nuevoLibro);
//         //    console.log(newSupply);
//         // } else {
//         //     console.log("Se cargó un libro nuevo");
//         // }
//     }
// }}

   


     // setStock() {
    //     let stockIni = 0;
    //     let unidadesAdd = parseInt(document.getElementById("cantidadUnidades").value,10);
    //     this.stock = stockIni + unidadesAdd;
    //     console.log(this.stock);
    // }