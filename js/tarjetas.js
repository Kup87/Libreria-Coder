/*
    1- JQuery toggler/add class lighton -> dobleclick tr (DONE)
    2- jquery toggler/remove class lighton -> click btn & click outside (No puedo seleccionar "afuera")
    3- Datos "target"

*/

$("tbody").on('dblclick', (e)=>{
    $(".lightbox").addClass("lightOn");
    let string = $(e.target).parent().text();
    let array = string.split("\n");
    console.log(array);
    // printTarjeta();
});

$(".btn_close").click(()=>{
    $(".lightbox").removeClass("lightOn");
})

// let printTarjeta = ()=> {
//     console.log("hola")
// }