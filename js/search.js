let filteredData = []; //Nuevo array con los datos filtrados
$('#search-input').on('keyup',()=>{
    
   let searchValue = $('#search-input').val().toUpperCase();
   searchTabla(searchValue, Libreria);
   showCatalogo(filteredData);
   filteredData.length=0;
   document.getElementById("tbody").scrollIntoView();
   
    
});

const searchTabla = (searchValue, data)=>{
    
    for (const dato of data) {
        if (dato.titulo.includes(searchValue) || dato.autor.includes(searchValue) ){
            filteredData.push(dato)
        }
    } return filteredData
    
};

