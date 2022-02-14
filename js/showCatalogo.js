//Escribe una tabla para mostrar el catálogo
//Mostrar el catálogo por tabla
$("#showCatalogo").on("click", ()=> {
    LibreriaFx();
    showCatalogo(Libreria);
});

const showCatalogo = (e) => {

    let tr = document.querySelectorAll(".tr");
    
    for(let i = 0, j = tr.length; i < j; i++) {
        tr[i].remove()
    }
    
    for (item of e) {

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
};