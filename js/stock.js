//Comparar el libro ingresado con las entradas anteriores
let existsInStock = ()=> {
    
    let inStock = JSON.parse(localStorage.getItem("Libreria"));
    for (item of inStock) {
        if (item["titulo"] === titulo.value && item["autor"] === autor.value && item["estado"] === estado.value){
            //Hacer que se sumen los stocks y evitar que se cree otra entrada
            
           console.log(item) 
        }
    }
}

   


     // setStock() {
    //     let stockIni = 0;
    //     let unidadesAdd = parseInt(document.getElementById("cantidadUnidades").value,10);
    //     this.stock = stockIni + unidadesAdd;
    //     console.log(this.stock);
    // }