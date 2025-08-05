const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const txtEmpresa = document.getElementById("txtEmpresa");
const iptCorreo1 = document.getElementById("iptCorreo1"); // iptCorreo1 Correo electrónico
const txtEspecificaciones = document.getElementById("Textarea1"); // Textarea de especificaciones del proyecto
const contadorCaracteres = document.getElementById("contadorCaracteres"); // Texto que muestra el conteo de caracteres
const txtTelefono1 = document.getElementById("txtTelefono1");

btnEnviar.addEventListener("click", function (event){
    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML="";// Limpia la alerta
    alertValidaciones.style.display="none"; // Limpia el fondo de la alerta
    txtEmpresa.style.boxShadow= "none";
    txtEmpresa.style.border="";// limpia el borde rojo del campo name cuando hay alerta
    txtTelefono1.style.boxShadow= "none";
    txtTelefono1.style.border="";
    iptCorreo1.style.boxShadow= "none";
    iptCorreo1.style.border="";// Limpia el borde rojo del campo correo 
    txtEspecificaciones.style.border = ""; // Limpia el borde del campo especificaciones
    txtEspecificaciones.style.boxShadow = "none"; // Limpia sombraMargen rojo del campo especificaciones


    if (txtEmpresa.value.length<3){
        txtEmpresa.style.setProperty("border", "1px solid #DD0069", "important");
        txtEmpresa.style.setProperty("background-color", "#ffffff", "important");
        txtEmpresa.style.boxShadow= "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML="<strong>Ingresa un nombre válido</strong><br>"; // Alerta
        alertValidaciones.style.display="block"; // Fondo de alerta del div
        isValid = false;
    }

    //Validacion del campo de Telefono 
    if(txtTelefono1.value.trim() ==="") {
        txtTelefono1.style.border="thin solid #DD0069";
        txtTelefono1.style.boxShadow= "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML+="<strong>Ingresa un número de Teléfono</strong><br>"; // Alerta
        alertValidaciones.style.display="block"; // Fondo de alerta del div
        isValid = false;
    }
    if(!/^\d{10}$/.test(txtTelefono1.value)){
    txtTelefono1.style.setProperty("border", "1px solid #DD0069", "important");
        txtTelefono1.style.boxShadow= "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML+="<strong>El número no contiene 10 dígitos</strong><strong> Este espacio sólo acepta números</strong><br/>"; // Alerta
        alertValidaciones.style.display="block"; // Fondo de alerta del div
        isValid = false;
    }

    // Validación del campo Correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z.]*[a-zA-Z]{2,3}$/;
    if (!regexCorreo.test(iptCorreo1.value)) {
        iptCorreo1.style.setProperty("border", "1px solid #DD0069", "important");
        iptCorreo1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML += "<strong>Ingresa un correo electrónico válido</strong><br>";
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

     if(isValid){
        txtEmpresa.value="";// Limpia el valor de txtName
        txtEmpresa.focus(); // Coloca el cursor en la casilla txtName;
        txtTelefono1.value="";
        iptCorreo1.value=""; //Limpia el valor de iptCorreo1
        txtEspecificaciones.value = "";
     }
}
);

    txtEspecificaciones.addEventListener("input", function () {
    let caracteresActuales = txtEspecificaciones.value.length; // Contar cuántos lleva
    contadorCaracteres.innerText = `${caracteresActuales}/500`; // Actualizar el texto
});