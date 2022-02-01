/*
    1- JQuery toggler/add class lighton -> dobleclick tr (DONE)
    2- jquery toggler/remove class lighton -> click btn & click outside (DONE)
    3- Datos "target" (DONE - URL por fakepath no puedo mostrar la imagen. URL random funciona)s

*/

$("tbody").on('dblclick', (e)=>{
    $(".lightbox").addClass("lightOn"); //No uso .toggle() xq no da "display:flex" y no se centra
    let string = $(e.target).parent().text();
    let array = string.split("\n");    

    $(".tarjeta").html(
        
    `<section class="mx-auto my-5" style="max-width: 23rem;">
        <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${array[14]}" class="img-fluid" />
            </div>
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
    
});

$(".btn_close").click(()=>{
    $(".lightbox").removeClass("lightOn");
})

$(document).click((event) => {
    if (!$(event.target).closest(".tarjeta").length) {
        $(".lightbox").removeClass("lightOn");
    }        
});