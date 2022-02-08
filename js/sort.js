const btnSortTitulo = document.getElementById("sortTitulo"); //btn Titulo

const btnCambio = (d) => { //Alterna entre AZ y ZA dando un valor al btn
    if(d.value=="AZ"){
        d.value="ZA";
    } else if(d.value=="ZA"){
        d.value="AZ";
    }
};

$("#sortTitulo").on("click", (e)=> { // FUNCIÓN BTN TITULO
    if(e.target.value=="AZ"){
        sortCatalogoAZ();
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA();
    }
    btnCambio(btnSortTitulo);
});

const sortCatalogoAZ = () => { //Ordena A -> Z
    let Libreria = JSON.parse(localStorage.getItem('Libreria'));
    Libreria.sort((a, b, c)=> {
        c = "'titulo'";
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

const sortCatalogoZA = () => { //Ordena Z -> A
    let Libreria = JSON.parse(localStorage.getItem("Libreria"));
    Libreria.sort((a, b, c)=> {
        c = 'titulo';
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
}