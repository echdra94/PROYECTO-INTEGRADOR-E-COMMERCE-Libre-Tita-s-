const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const txtEmpresa = document.getElementById("txtEmpresa");
const iptCorreo1 = document.getElementById("iptCorreo1"); // iptCorreo1 Correo electrónico
const txtEspecificaciones = document.getElementById("Textarea1"); // Textarea de especificaciones del proyecto
const contadorCaracteres = document.getElementById("contadorCaracteres"); // Texto que muestra el conteo de caracteres
const txtTelefono1 = document.getElementById("txtTelefono1");
const formContactanos = document.getElementById("formContactanos");

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML = "";// Limpia la alerta
    alertValidaciones.style.display = "none"; // Limpia el fondo de la alerta
    txtEmpresa.style.boxShadow = "none";
    txtEmpresa.style.border = "";// limpia el borde rojo del campo name cuando hay alerta
    iptCorreo1.style.boxShadow = "none";
    iptCorreo1.style.border = "";// Limpia el borde rojo del campo correo 
    txtTelefono1.style.boxShadow = "none";
    txtTelefono1.style.border = "";// Limpia el borde rojo del campo teléfono 
    txtEspecificaciones.style.border = ""; // Limpia el borde del campo especificaciones
    txtEspecificaciones.style.boxShadow = "none"; // Limpia sombraMargen rojo del campo especificaciones


    // Validación del campo Empresa
    if (txtEmpresa.value.trim().length < 3) {
        txtEmpresa.style.border = "thin solid #DD0069";
        txtEmpresa.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML = "<strong>Ingresa un nombre válido</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    // Validación del campo Correo electrónico
    // dejo esto para que comparen el cambio con const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z.]*[a-zA-Z]{2,3}$/; atte. Mar Z.

    // Antes de validar, aseguramos que esté en minúsculas
    iptCorreo1.value = iptCorreo1.value.toLowerCase();

    // Validación correo (modifica el regex para prohibir espacios y mayúsculas)
    const regexCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (!regexCorreo.test(iptCorreo1.value)) {
        iptCorreo1.style.setProperty("border", "1px solid #DD0069", "important");
        iptCorreo1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML += "<strong>Ingresa un correo electrónico válido (sin espacios ni mayúsculas).</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    // Validación del campo Teléfono
    const regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(txtTelefono1.value)) {
        txtTelefono1.style.setProperty("border", "1px solid #DD0069", "important");
        txtTelefono1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML += "<strong>Ingresa un teléfono válido de 10 dígitos.</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }


    // para validar campo Especificaciones
    const especificacionesTexto = txtEspecificaciones.value.trim(); // Quitamos espacios sobrantes

    if (especificacionesTexto.length < 10) {
        // Si tiene menos de 10 caracteres reales o menos de 10 palabras
        txtEspecificaciones.style.setProperty("border", "1px solid #DD0069", "important");
        txtEspecificaciones.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML += "<strong>Por favor describe con más detalle las especificaciones del proyecto.</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else if (especificacionesTexto.length > 500) {
        // Si el texto excede los 500 caracteres
        txtEspecificaciones.style.setProperty("border", "1px solid #DD0069", "important");
        txtEspecificaciones.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML += "<strong>El texto no debe exceder los 500 caracteres.</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if (isValid) {

        btnEnviar.innerText = "Enviando...";

        const serviceID = 'default_service';
        const templateID = 'template_s6w5oib';

        emailjs.sendForm(serviceID, templateID, formContactanos)
            .then(() => {
                // Aquí reemplazamos el alert por el mensaje en la alerta Bootstrap
                alertValidacionesTexto.innerHTML = "<strong class='text-success'>¡Correo enviado con éxito!</strong>";
                alertValidaciones.classList.remove("alert-danger");
                alertValidaciones.classList.add("alert-success");
                alertValidaciones.style.display = "block";

                btnEnviar.innerText = "Enviar";
            }, (err) => {
                alert("Error al enviar: " + JSON.stringify(err));
                btnEnviar.innerText = "Enviar";
            });
        txtEmpresa.value = "";// Limpia el valor de txtName
        txtEmpresa.focus(); // Coloca el cursor en la casilla txtName;
        iptCorreo1.value = ""; //Limpia el valor de iptCorreo1
        txtTelefono1.value = ""; // Limpia el valor de teléfono
        txtEspecificaciones.value = "";


    }
}
);

txtEspecificaciones.addEventListener("input", function () {
    let caracteresActuales = txtEspecificaciones.value.length; // Contar cuántos lleva
    contadorCaracteres.innerText = `${caracteresActuales}/500`; // Actualizar el texto
});

