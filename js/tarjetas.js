let lightboxPrint = (e)=>{ //Fx para imprimir la tarjetita

    $(".lightbox").addClass("lightOn"); //No uso .toggle xq no le da "display: flex" y no se centra
    let string = $(e.target).parent().text(); //Creo un string con lo q dice la td
    
    let array = string.split("\n"); //Lo convierto en array para poder acceder a sus propiedades
    
    let imgTarjetita; //Manejo un par de errores de las imágenes
    if (!array[14].replace(/\s/g, '').length) {//si están vacías
        imgTarjetita = (`<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="/assets/imagen_no_disponible.jpg" class="img-fluid" /></div>`)
    } else {  //Si funciona bien PERO con un "onerror" directamente en el html      
        imgTarjetita = (`<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="${array[14]}" class="img-fluid" onerror="this.onerror=null;this.src='/assets/imagen_no_disponible.jpg';"/></div>`)
    }    
    //Acá está la escritura de html  
    $(".tarjeta").html(` 
    <section class="mx-auto my-5" style="max-width: 23rem;">
        <div class="card">
        ${imgTarjetita}
            <div class="card-body">
            <h2 class="card-title font-weight-bold text-center"><a>${array[2]}</a></h2>
            <h4 class="mb-2 ">${array[4]}</h4>
            <p class="card-text"><span>Compra: $${array[6]}</span> <span class="float-end">Venta: $${array[8]}</span></p>
            <p class="card-text"><span>Estado:${array[12]}</span> <span class="float-end">Stock${array[10]}</span></p>
            </div>
        </div>      
    </section>`);

    // console.log(array[2]); //Título
    // console.log(array[4]); //Autor
    // console.log(array[6]); //$Compra
    // console.log(array[8]); //$Venta
    // console.log(array[10]); //Stock
    // console.log(array[12]); //Estado
    // console.log(array[14]); //Url

}
$("tbody").on('dblclick', (e)=>{ //Si hacés dobleclick, imprime la tarjeta
    lightboxPrint(e);    
});

//DoubleClick obviamente no funciona con doubleTap, so...
$("tbody").on("touchstart", tapHandler);
var tapedTwice = false;
function tapHandler(e) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 ); //Si lo quiero apurar o no
        return false;
    }
    e.preventDefault();
    lightboxPrint(e);  
 }

//Para cerrar la tarjeta
$(".btn_close").click(()=>{
    $(".lightbox").removeClass("lightOn");
})

$(document).click((event) => { //Para que la cierre sin tener que ir al btn "X"
    if (!$(event.target).closest(".tarjeta").length) {
        $(".lightbox").removeClass("lightOn");
    }        
});