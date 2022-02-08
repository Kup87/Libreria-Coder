const btnSortTitulo = document.getElementById("sortTitulo");

const btnCambio = (d) => {
    if(d.value=="AZ"){
        d.value="ZA";
    } else if(d.value=="ZA"){
        d.value="AZ";
    }
};

$("#sortTitulo").on("click", (e)=> {
    if(e.target.value=="AZ"){
        sortCatalogoAZ();
    }
    else if(e.target.value=="ZA"){
        sortCatalogoZA();
    }
    btnCambio(btnSortTitulo);
});

const sortCatalogoAZ = () => {
    let Libreria = JSON.parse(localStorage.getItem("Libreria"));
    Libreria.sort(function (a, b) {
        if (a.titulo > b.titulo) {
            return 1;
        }
        if (a.titulo < b.titulo) {
            return -1;
        }
        // Si son iguales
        return 0;
    });
    localStorage.setItem("Libreria", JSON.stringify(Libreria));
    showCatalogo(); //Lo imprimo
};

const sortCatalogoZA = () => {
    let Libreria = JSON.parse(localStorage.getItem("Libreria"));
    Libreria.sort(function (a, b) {
        if (a.titulo < b.titulo) {
            return 1;
        }
        if (a.titulo > b.titulo) {
            return -1;
        }
        // Si son iguales
        return 0;
  });
  localStorage.setItem("Libreria", JSON.stringify(Libreria));
  showCatalogo(); //Lo imprimo
}