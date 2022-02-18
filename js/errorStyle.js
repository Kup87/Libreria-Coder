//Agregar o quitar la clase CSS "requiered"
const destacarError = (o) => {
    o.classList.add("requiered");
    o.placeholder = "Es necesario completar este campo";
}

const limpiarError = (o) => {
    o.classList.remove("requiered");
}

const destacarErrorSelect = (o) => {
    o.classList.add("form-select-requiered");
    optionText = 'Es necesario completar este campo';
    optionValue = 'req';
    o.append(optionReq = new Option(optionText, optionValue));
    o.value = "req";
}

$(".form-select").on('focus', ()=> {
    for (var t = 0; t < estado.length; t++) {
        var str = estado.options[t];
        if (str.value === "req") {
            estado.removeChild(estado.options[t]);
        }
    }
})

$(".form-select").on('change', ()=> {
    if (estado.value != "") {
        estado.classList.remove("form-select-requiered");
        limpiarError(estado);
    }
})