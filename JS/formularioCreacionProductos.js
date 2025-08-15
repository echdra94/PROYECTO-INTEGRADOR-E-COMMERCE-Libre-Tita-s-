const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

const txtProducto = document.getElementById("txtProducto");  // nombreProducto
const txtDescr    = document.getElementById("Textarea1");    // descripciónProducto
const txtPrecio   = document.getElementById("txtPrecio");    // precioProducto
const contadorCaracteres = document.getElementById("contadorCaracteres");
const formProductos = document.getElementById("formProductos");

// Contador de caracteres
txtDescr.addEventListener("input", function () {
    contadorCaracteres.innerText = `${txtDescr.value.length}/100`;
});

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    // Limpiar alertas y bordes
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtProducto.style.border = "";
    txtDescr.style.border = "";
    txtPrecio.style.border = "";

    let isValid = true;

    // --- Validación Nombre Producto ---
    if (txtProducto.value.trim().length < 3) {
        txtProducto.style.border = "thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>El nombre debe tener al menos 3 caracteres.</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    // --- Validación Precio Producto---
    const valorPrecio = txtPrecio.value.trim();
    if (valorPrecio.length === 0 || isNaN(valorPrecio) || Number(valorPrecio) <= 0) {
        txtPrecio.style.border = "thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>El precio no es válido (usa números y hasta 2 decimales).</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
     } 
 

    // --- Validación Descripción ---
    if (txtDescr.value.trim().length < 20) {
        txtDescr.style.border = "thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>Por favor, añade una descripción del producto.</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else if (txtDescr.value.trim().length > 100) {
        txtDescr.style.border = "thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>La descripción no puede exceder los 100 caracteres.</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    // --- Producto validado ---
    if (isValid) {
        alertValidacionesTexto.innerHTML = "<strong class='text-success'>¡Producto validado y listo para guardar!</strong>";
        alertValidaciones.classList.remove("alert-danger");
        alertValidaciones.classList.add("alert-success");
        alertValidaciones.style.display = "block";

         // --- Guardar producto en localStorage ---
        const producto = {
            nombre: txtProducto.value,
            descripcion: txtDescr.value,
            precio: txtPrecio.value,
            imagen: imagenURL // viene de widgetCloudinary.js
        };
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));        

        // Limpiar campos
        formProductos.reset();
        contadorCaracteres.innerText = "0/100";
        txtProducto.focus();
    }
});
