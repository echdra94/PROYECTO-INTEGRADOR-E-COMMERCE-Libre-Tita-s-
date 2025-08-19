document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById("btnEnviar");
    const alertValidaciones = document.getElementById("alertValidaciones");
    const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
    const txtNombre = document.getElementById("txtNombre");
    const txtApellido = document.getElementById("txtApellido");
    const iptCorreo1 = document.getElementById("iptCorreo1"); // iptCorreo1 Correo electrónico
    const selectDominio = document.getElementById("selectDominio"); // Select para elegir el dominio
    const iptCorreoDominio = document.getElementById("iptCorreoDominio"); // Input para la parte del dominio
    const txtPassword = document.getElementById("txtPassword"); // Input contraseña
    const txtConfirmPassword = document.getElementById("txtConfirmPassword"); // Input confirmar contraseña
    const contadorCaracteres = document.getElementById("contadorCaracteres"); // Texto que muestra el conteo de caracteres
    const txtTelefonoUsuario = document.getElementById("txtTelefonoUsuario");
    
    //---------------------------LIMPIA DE ALERTAS-------------------------------------------------------------------
    btnEnviar.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;
        alertValidacionesTexto.innerHTML = "";// Limpia la alerta
        alertValidaciones.style.display = "none"; // Limpia el fondo de la alerta
        txtNombre.style.boxShadow = "none";
        txtNombre.style.border = "";// limpia el borde rojo del campo name cuando hay alerta
        txtApellido.style.boxShadow = "none";
        txtApellido.style.border = "";// limpia el borde rojo del campo name cuando hay alerta
        iptCorreo1.style.boxShadow = "none";
        iptCorreo1.style.border = "";// Limpia el borde rojo del campo correo 
        txtTelefonoUsuario.style.boxShadow = "none";
        txtTelefonoUsuario.style.border = "";// Limpia el borde rojo del campo teléfono 


        /**----------------------------------------NOMBRE------------------------------------------------------------------------------------------
         * Validación del campo /Nombre
         */
        const regexNombre = /^(?!.*([a-zA-ZÁÉÍÓÚáéíóúÑñ])\1{2})([A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})+$/;
        if (!regexNombre.test(txtNombre.value.trim())) {
            txtNombre.style.border = "thin solid #DD0069";
            txtNombre.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
            alertValidacionesTexto.innerHTML = "<strong>Ingresa un nombre válido</strong><br>";
            alertValidaciones.style.display = "block";
            isValid = false;
        }

        /**----------------------------------------APELLIDO------------------------------------------------------------------------------------------
     * Validación del campo Apellido
     */
        const regexApellido = /^(?!.*([a-zA-ZÁÉÍÓÚáéíóúÑñ])\1{2})([A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})+$/;
        if (!regexApellido.test(txtApellido.value.trim())) {
            txtApellido.style.border = "thin solid #DD0069";
            txtApellido.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
            alertValidacionesTexto.innerHTML = "<strong>Ingresa un apellido válido</strong><br>";
            alertValidaciones.style.display = "block";
            isValid = false;
        }

        /** -----------------------------------------CORREO ELECTRÓNICO------------------------------------------------------------------------------------
         * Validación del campo Correo electrónico
        */

        iptCorreo1.value = iptCorreo1.value.toLowerCase().trim();

        //Decidimos que dominio usar MI
        let correoCompleto = iptCorreo1.value; //por defecto- MI
        if (iptCorreoDominio.value.trim()) {
            correoCompleto += "@" + iptCorreoDominio.value.toLowerCase().trim();
        } else if (selectDominio.value) {
            correoCompleto += "@" + selectDominio.value;
        }

        const regexCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        // Validamos usando correoCompleto
        if (!regexCorreo.test(correoCompleto)) {
            iptCorreo1.style.setProperty("border", "1px solid #DD0069", "important");
            iptCorreo1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
            alertValidacionesTexto.innerHTML += "<strong>Ingresa un correo electrónico válido (sin espacios ni mayúsculas y con dominio correcto).</strong><br>";
            alertValidaciones.style.display = "block";
            isValid = false;
        }

        let partes = correoCompleto.split("@");
        if (partes[0].includes("..") || partes[1].includes("..")) {
            alertValidacionesTexto.innerHTML += "<strong>El correo no puede tener dos puntos consecutivos.</strong><br>";
            alertValidaciones.style.display = "block";
            isValid = false;
            if (!/^[a-z0-9._%+-]+$/.test(partes[0])) {
                alertValidacionesTexto.innerHTML += "<strong>El nombre de usuario del correo contiene caracteres inválidos.</strong><br>";
                alertValidaciones.style.display = "block";
                isValid = false;
            }
        }
        /** -----------------------------------------CONTRASEÑAS------------------------------------------------------------------------------------
         * Validación de contraseñas
        */
        if (txtPassword.value === "" || txtConfirmPassword.value === "") {
            alertValidacionesTexto.innerHTML += "❌ Por favor ingresa la contraseña y confirmación.<br>";
            alertValidaciones.style.display = "block";
            txtPassword.style.border = "2px solid red";
            txtConfirmPassword.style.border = "2px solid red";
            isValid = false;
        } else if (txtPassword.value !== txtConfirmPassword.value) {
            alertValidacionesTexto.innerHTML += "❌ Las contraseñas no coinciden.<br>";
            alertValidaciones.style.display = "block";
            txtPassword.style.border = "2px solid red";
            txtConfirmPassword.style.border = "2px solid red";
            isValid = false;
        }

        /** -----------------------------------------------------------------------------------------------------------------------------
         * Validación del campo Teléfono
         */
        const regexTelefono = /^[0-9]{10}$/;
        if (!regexTelefono.test(txtTelefonoUsuario.value)) {
            txtTelefonoUsuario.style.setProperty("border", "1px solid #DD0069", "important");
            txtTelefonoUsuario.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
            alertValidacionesTexto.innerHTML += "<strong>Ingresa un teléfono válido de 10 dígitos.</strong><br>";
            alertValidaciones.style.display = "block";
            isValid = false;
        } else {
            // Función para detectar secuencia ascendente o descendente
            function esSecuenciaAscDesc(numero) {
                let asc = true, desc = true;
                for (let i = 1; i < numero.length; i++) {
                    if (parseInt(numero[i]) !== (parseInt(numero[i - 1]) + 1) % 10) asc = false;
                    if (parseInt(numero[i]) !== (parseInt(numero[i - 1]) - 1 + 10) % 10) desc = false;
                }
                return asc || desc;
            }
            // Función para detectar patrones repetitivos (bloques de 1, 2 o 3 dígitos) MI
            function esPatronRepetitivo(numero) {
                for (let len = 1; len <= 3; len++) {
                    let bloque = numero.slice(0, len);
                    let repetido = true;
                    for (let i = 0; i < numero.length; i += len) {
                        if (numero.slice(i, i + len) !== bloque) {
                            repetido = false;
                            break;
                        }
                    }
                    if (repetido) return true;
                }
                return false;
            }

            // Validar si todos los dígitos son iguales
            //let telefonoValor = txtTelefono1.value; no seria necesario esta línea porque ya tenemos txtTelefono1 y no declararemos otro nombre de variable MI
            //const todosIguales = /^(\d)\1{9}$/.test(txtTelefono1.value); lo quite en MI

            //if (todosIguales || esSecuenciaAscDesc(txtTelefono1.value) || esPatronRepetitivo(txtTelefono1.value)) {
            if (/^(\d)\1{9}$/.test(txtTelefonoUsuario.value) || esSecuenciaAscDesc(txtTelefonoUsuario.value) || esPatronRepetitivo(txtTelefonoUsuario.value)) {
                txtTelefonoUsuario.style.setProperty("border", "1px solid #DD0069", "important");
                txtTelefonoUsuario.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
                alertValidacionesTexto.innerHTML += "<strong>Ingresa un teléfono válido, no repetido ni secuencial.</strong><br>";
                alertValidaciones.style.display = "block";
                isValid = false;
            }
        }

        //-------------------------------LIMPIAR CAMPOS----------------------------------------------------------
        txtNombre.value = "";// Limpia el valor de txtName
        txtNombre.focus(); // Coloca el cursor en la casilla txtName;
        txtApellido.value = "";// Limpia el valor de txtApellido
        txtApellido.focus(); // Coloca el cursor en la casilla txtApellido;
        iptCorreo1.value = ""; //Limpia el valor de iptCorreo1
        iptCorreoDominio.value = ""; //Limpia el valor de iptCorreoDominio
        txtPassword.value = "";
        txtConfirmPassword.value = "";
        txtTelefonoUsuario.value = ""; // Limpia el valor de teléfono
        txtEspecificaciones.value = "";
        contadorCaracteres.innerText = "0/500";
        // Si hay errores, mostrar la alerta
        if (!isValid) {
            alertValidaciones.style.display = "block";
        }
    });
});
//-----------------------FORZAR MINÚSCULAS Y QUITAR ESPACIOS EN BLANCO DEL CORREO-------------------
iptCorreo1.addEventListener('input', () => {
    iptCorreo1.value = iptCorreo1.value.toLowerCase().replace(/\s/g, '');
});
iptCorreoDominio.addEventListener('input', () => {
    iptCorreoDominio.value = iptCorreoDominio.value.toLowerCase().replace(/\s/g, '');
});