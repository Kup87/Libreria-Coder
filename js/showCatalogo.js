const showCatalogo = () => {
    
    let catalogo = JSON.parse(localStorage.getItem("Libreria"));
    let tr = document.querySelectorAll(".tr");
    
    for(let i = 0, j = tr.length; i < j; i++) {
        tr[i].remove()
    }
    
    for (item of catalogo) {

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
}