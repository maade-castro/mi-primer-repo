//FUNCION DESPLIEGUE MENU
function openMenu() {
    let links = document.querySelector('.navbar');

    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
}

let menuButton = document.querySelector('#menu');
menuButton.addEventListener("click", openMenu);

//****************Expresión regular para formulario de alta*******

//NOMBRE*
const nombreInput = document.getElementById("nombre");
const mensajeNombre = document.getElementById("msj__nombre");
const nombreRegex = /^[A-Za-z\s]+$/;

nombreInput.addEventListener("blur", function () {
    const nombreValue = nombreInput.value;

    if (nombreRegex.test(nombreValue)) {
        // El valor es válido, borra cualquier mensaje de error y restablece el borde
        mensajeNombre.textContent = "";
        nombreInput.style.border = "1px solid #ccc"; // Borde normal
    } else {
        // El valor no es válido, muestra un mensaje de error y cambia el borde a rojo
        mensajeNombre.textContent = "Debe contener solo letras y espacios.";
        mensajeNombre.style.color = "red";
        nombreInput.style.border = "1px solid red"; // Borde rojo
    }
});


//PRECIO*
const precioInput = document.getElementById("precio");
const mensajePrecio = document.getElementById("msj__precio");
const precioRegex = /^\d+(\.\d{1,2})?$/;

precioInput.addEventListener("blur", function () {
    const precioValue = precioInput.value;

    if (precioRegex.test(precioValue)) {
        mensajePrecio.textContent = "";
        precioInput.style.border = "1px solid #ccc"; // Borde normal
        mensajePrecio.style.color = "black"; // Color de texto normal
    } else {
        mensajePrecio.textContent = "Ingrese un precio válido (por ejemplo, 99.99).";
        mensajePrecio.style.color = "red";
        precioInput.style.border = "1px solid red"
    }
});

//STOCK*
const stockInput = document.getElementById("stock");
const mensajeStock = document.getElementById("msj__stock");
const stockRegex = /^[1-9]\d*$/;

stockInput.addEventListener("blur", function () {
    const stockValue = stockInput.value;

    if (stockRegex.test(stockValue)) {
        mensajeStock.textContent = "";
        stockInput.style.border = "1px solid #ccc"; // Borde normal
        mensajeStock.style.color = "black"; // Color de texto normal
    } else {
        mensajeStock.textContent = "Valor de stock válido (números enteros positivos).";
        stockInput.style.border = "1px solid red"; // Borde rojo
        mensajeStock.style.color = "red"; // Color de texto rojo
    }
});

//MARCA Y CATEGORIA*
const marcaInput = document.getElementById("marca");
const mensajeMarca = document.getElementById("msj__marca");
const categoriaInput = document.getElementById("categoria");
const mensajeCategoria = document.getElementById("msj__categoria");

const regex = /^[A-Za-z0-9\s]+$/;

function validarCampo(input, mensaje, mensajeError) {
    const valor = input.value;

    if (regex.test(valor)) {
        mensaje.textContent = "";
        input.style.border = "1px solid #ccc"; // Borde normal
        mensaje.style.color = "black"; // Color de texto normal
    } else {
        mensaje.textContent = mensajeError;
        input.style.border = "1px solid red"; // Borde rojo
        mensaje.style.color = "red"; // Color de texto rojo
    }
}
marcaInput.addEventListener("blur", function () {
    validarCampo(marcaInput, mensajeMarca, "Letras, números y espacios permitidos).");
});

categoriaInput.addEventListener("blur", function () {
    validarCampo(categoriaInput, mensajeCategoria, "Letras, números y espacios permitidos).");
});

//EDAD*
const edadInput = document.getElementById("edad");
const mensajeEdad = document.getElementById("msj__edad");

edadInput.addEventListener("blur", function () {
    const edadValue = parseInt(edadInput.value, 10);
    
    const minEdad = parseInt(edadInput.getAttribute("min"), 10);
    const maxEdad = parseInt(edadInput.getAttribute("max"), 10);

    if (!isNaN(edadValue) && edadValue >= minEdad && edadValue <= maxEdad) {
        mensajeEdad.textContent = "";
        edadInput.style.border = "1px solid #ccc"; // Borde normal
        mensajeEdad.style.color = "black"; // Color de texto normal
    } else {
        mensajeEdad.textContent = "Ingrese una edad válida entre " + minEdad + " y " + maxEdad + ".";
        edadInput.style.border = "1px solid red"; // Borde rojo
        mensajeEdad.style.color = "red"; // Color de texto rojo
    }
});

//ENVIO*
const sinCargoRadio = document.getElementById("sinCargo");
const conCargoRadio = document.getElementById("conCargo");
const mensajeEnvio = document.getElementById("msj__envio");

sinCargoRadio.addEventListener("change", validarEnvio);
conCargoRadio.addEventListener("change", validarEnvio);

function validarEnvio() {
    if (sinCargoRadio.checked || conCargoRadio.checked) {
        mensajeEnvio.textContent = "";
        mensajeEnvio.style.color = "black"; // Color de texto normal
    } else {
        mensajeEnvio.textContent = "Seleccione una opción de envío.";
        mensajeEnvio.style.color = "red"; // Color de texto rojo
    }
}

// Llama a la función de validación al cargar la página para asegurarte de que haya una opción seleccionada inicialmente
validarEnvio();

//IMAGEN*
const imagenInput = document.getElementById("imagen");
const mensajeImagen = document.getElementById("msj__imagen");

imagenInput.addEventListener("change", function () {
    const archivo = imagenInput.files[0]; // Obtiene el archivo seleccionado

    if (archivo) {
        // Se seleccionó un archivo, verifica si es una imagen
        if (esImagen(archivo)) {
            // Es una imagen, borra cualquier mensaje de error y restablece el color del mensaje
            mensajeImagen.textContent = "";
            mensajeImagen.style.color = "black"; // Color de texto normal
        } else {
            // No es una imagen, muestra un mensaje de error en rojo
            mensajeImagen.textContent = "Seleccione un archivo de imagen válido.";
            mensajeImagen.style.color = "red"; // Color de texto rojo
            // Limpia el valor del campo de entrada para evitar que se envíe un archivo no válido
            imagenInput.value = "";
        }
    } else {
        mensajeImagen.textContent = "Seleccione un archivo de imagen.";
        mensajeImagen.style.color = "red"; // Color de texto rojo
    }
});
// Función para verificar si un archivo es una imagen
function esImagen(archivo) {
    const tiposDeImagenPermitidos = ["image/jpeg", "image/png", "image/gif"];
    return tiposDeImagenPermitidos.includes(archivo.type);
}

//****************Expresión regular para formulario de CONTACTO*******

//NOMBRE*
