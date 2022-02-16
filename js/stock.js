//Comparar el libro ingresado con las entradas anteriores
let setStock = ()=> {

    if (Libreria !== null){
        for (item of Libreria) {
            if (item["titulo"] == nuevoLibro.titulo && item["autor"] == nuevoLibro.autor && item["estado"] == nuevoLibro.estado ){

                let x = Libreria.indexOf(item); //Encuentra el index del objeto

                newStock = parseInt(nuevoLibro.stock) + parseInt(item["stock"]); 
                nuevoLibro.stock = newStock;

                Libreria.splice(x,1);
                localStorage.setItem("Libreria", JSON.stringify(Libreria));

            }
        }
    }
}

