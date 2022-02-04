//Método GET
const URLGET = "https://jsonplaceholder.typicode.com/posts";

$("body").prepend('<button id="btn1">Get</button>');

$("#btn1").click(()=>{
    $.get(URLGET, (respuesta, estado)=>{
        if (estado === "success") {
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("body").prepend (`<div>
                <h3>${dato.title}</h3>
                <p>${dato.body}</p>
                <div>`);
            }
        }
    })
    .fail(()=>{
        alert("error")
    })
})

//Método POST

const infoPost = { nombre: "Ana" , profesion: "Programadora"}

$("body").prepend('<button id="btn2">POST</button>');

$("#btn2").click(()=>{
    $.post(URLGET, infoPost, (respuesta, estado)=>{
        if (estado === "success") {
                $("body").prepend(`<div>
                Guardado: ${respuesta.nombre}
                </div>`);
            }
        })
    .fail(()=>{
        alert("error")
    })
})