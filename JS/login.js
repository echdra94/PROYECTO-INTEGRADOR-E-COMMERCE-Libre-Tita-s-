document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formularioLogin');
    const emailInput = document.getElementById('txtCorreo');
    const alertBox = document.getElementById('alertValidaciones');
    const alertText = document.getElementById('alertValidacionesTexto');

    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        const correoIngresado = emailInput.value.trim().toLowerCase();
     //   const de contraeñaIngresada

        // ------------------- VALIDACIONES CORREO -------------------
        if (correoIngresado === "") {
            mostrarError("Debes llenar ambos campos.");
            return;
        }

        const regexCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!regexCorreo.test(correoIngresado)) {
            mostrarError("Formato de correo inválido. Usa ejemplo@dominio.com");
            return;
        }

        // ------------------- VALIDACIÓN CONTRASEÑA -------------------
        

        // ------------------- LOCALSTORAGE -------------------
  

        // ------------------- LOGIN EXITOSO -------------------
        


    });

    // ------------------- FUNCION PARA MOSTRAR ERRORES -------------------
    function mostrarError(mensaje) {
        alertBox.style.display = "block";
        alertText.textContent = mensaje;
    }
});
