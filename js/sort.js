const btnSortTitulo = document.getElementById("sortTitulo"); //btn Titulo
const btnSortAutor = document.getElementById("sortAutor");  //btn Autor
const btnSortCompra = document.getElementById("sortCompra"); //btn Compra
const btnSortVenta = document.getElementById("sortVenta");  //btn Venta
const btnSortStock = document.getElementById("sortStock");  //btn Stock

const btnCambio = (d) => { //Alterna entre AZ y ZA dando un valor al btn
    if(d.value=="AZ"){
        d.value="ZA";
    } else if(d.value=="ZA"){
        d.value="AZ";
    }
};

const sortCatalogoAZ = (c) => { //Ordena A -> Z
    let Libreria = JSON.parse(localStorage.getItem('Libreria'));
    Libreria.sort((a, b)=> {
        
        if (a[c] > b[c]) {
            return 1;
        }
        if (a[c] < b[c]) {
            return -1;
        }
        // Si son iguales
        return 0;
    });
    localStorage.setItem("Libreria", JSON.stringify(Libreria));
    showCatalogo(); //Lo imprimo
};

const sortCatalogoZA = (c) => { //Ordena Z -> A
    let Libreria = JSON.parse(localStorage.getItem("Libreria"));
    Libreria.sort((a, b)=> {
       
        if (a[c] < b[c]) {
            return 1;
        }
        if (a[c] > b[c]) {
            return -1;
        }
        // Si son iguales
        return 0;
  });
  localStorage.setItem("Libreria", JSON.stringify(Libreria));
  showCatalogo(); //Lo imprimo
};

$("#sortTitulo").on("click", (e)=> { // FUNCIÓN BTN TITULO
    if(e.target.value=="AZ"){
        sortCatalogoAZ("titulo");
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA("titulo");
    }
    btnCambio(btnSortTitulo);
});

$("#sortAutor").on("click", (e)=> { // FUNCIÓN BTN AUTOR
    if(e.target.value=="AZ"){
        sortCatalogoAZ("autor");
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA("autor");
    }
    btnCambio(btnSortAutor);
});

$("#sortCompra").on("click", (e)=> { // FUNCIÓN BTN COMPRA
    if(e.target.value=="AZ"){
        sortCatalogoAZ("pCompra");
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA("pCompra");
    }
    btnCambio(btnSortCompra);
});

$("#sortVenta").on("click", (e)=> { // FUNCIÓN BTN VENTA
    if(e.target.value=="AZ"){
        sortCatalogoAZ("pVenta");
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA("pVenta");
    }
    btnCambio(btnSortVenta);
});

$("#sortStock").on("click", (e)=> { // FUNCIÓN BTN STOCK
    if(e.target.value=="AZ"){
        sortCatalogoAZ("stock");
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA("stock");
    }
    btnCambio(btnSortStock);
});