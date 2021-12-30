class Libro {
    constructor(titulo,autor,pCompra,pVenta,estado,stock) {
        this.titulo = titulo;
        this.autor = autor;
        this.pCompra = parseInt(pCompra,10);
        this.pVenta = parseInt(pVenta,10);
        this.estado = estado;
        this.stock = stock;
    }

    checkForm() {
        let error = false;
        let checkTitulo = ()=> {
            if (this.titulo === ""){error = true;}
            console.log(error)
        }
        let checkAutor = ()=> {
            if (this.autor === ""){error = true;}
            console.log(error)
        }
        let checkPcompra = ()=> {
            if (isNaN(this.pCompra) || this.pCompra === "" || this.pCompra <= 0){error = true;}
            console.log(error)}
        let checkEstado = ()=> {
            if (this.estado === ""){error = true;}
            console.log(error)
        } 
    
        checkTitulo(); checkAutor(); checkPcompra(); checkEstado();
    
        if(error === true){
           console.log("Algún dato fue ingresado incorrectamente");
        }
    }

    setStock() {
        let stockIni = 0;
        let unidadesAdd = parseInt(document.getElementById("cantidadUnidades").value,10);
        this.stock = stockIni + unidadesAdd;
        console.log(this.stock);
    }
}

let catalogo = [];
const nuevoLibro = ()=> {
    
    
    let titulo = document.getElementById("tituloLibro");
    let autor = document.getElementById("autorLibro");
    let pCompra = document.getElementById("precioCompra");
    let pVenta = document.getElementById("precioVenta");
    let estado = document.getElementById("estadoLibro");
        
    const nuevoLibro = new Libro(titulo.value, autor.value, pCompra.value, pVenta.value, estado.value);
    nuevoLibro.checkForm();
    nuevoLibro.setStock();
    catalogo.push(nuevoLibro);
    
}

const mostrarCatalogo = ()=> {
    console.log(catalogo);
}