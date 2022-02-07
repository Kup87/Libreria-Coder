const btnSort = document.getElementById("sortName");

$("#sortName").on("click", ()=> {

    if(btnSort.value=="AZ"){
        sortCatalogoAZ();}
    else if(btnSort.value=="ZA"){
        sortCatalogoZA();}

    btnCambio();
})

const btnCambio = () => {
   
    if(btnSort.value=="AZ"){
        btnSort.value="ZA";}
    else if(btnSort.value=="ZA"){
        btnSort.value="AZ";}
  }


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

}

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