const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const txtEmpresa = document.getElementById("txtEmpresa");
const iptCorreo1 = document.getElementById("iptCorreo1"); // iptCorreo1 Correo electrónico
const selectDominio = document.getElementById("selectDominio"); // Select para elegir el dominio MI
const iptCorreoDominio = document.getElementById("iptCorreoDominio"); // Input para la parte del dominio MI
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
    txtEspecificaciones.style.boxShadow = "none"; // Limpia sombraMargen rojo del campo especificaciones
    txtEspecificaciones.style.border = ""; // Limpia el borde del campo especificaciones


    /**----------------------------------------NOMBRE------------------------------------------------------------------------------------------
     * Validación del campo Empresa/Nombre
     */
    const regexEmpresa = /^(?!.*([a-zA-ZÁÉÍÓÚáéíóúÑñ])\1{2})([A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})+$/;
    if (!regexEmpresa.test(txtEmpresa.value.trim())) {
        txtEmpresa.style.border = "thin solid #DD0069";
        txtEmpresa.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML = "<strong>Ingresa un nombre y apellido válidos</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    /** -----------------------------------------------------------------------------------------------------------------------------
     * Validación del campo Correo electrónico
     * antiguo const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z.]*[a-zA-Z]{2,3}$/; 
     * Antes de validar, aseguramos que esté en minúsculas
     */
    iptCorreo1.value = iptCorreo1.value.toLowerCase().trim();

    // Obtener el valor seleccionado del dominio si existe 
    //let dominioSeleccionado = document.getElementById("selectDominio").value; quite esto MI
    //let correoDominio = iptCorreoDominio.value.toLowerCase().trim(); se puso abajo, quite esto en MI
    //let dominioSeleccionado = selectDominio.value; //MI*

    //Decidimos que dominio usar MI
    let correoCompleto = iptCorreo1.value; //por defecto- MI
    if (iptCorreoDominio.value.trim()) {
        correoCompleto += "@" + iptCorreoDominio.value.toLowerCase().trim();
    } else if (selectDominio.value) {
        correoCompleto += "@" + selectDominio.value;
    }

    // if (dominioSeleccionado) {
    //     // Formamos el correo completo solo una vez
    //     correoCompleto = iptCorreo1.value.split("@")[0] + "@" + dominioSeleccionado;
    // } else {
    //     correoCompleto = iptCorreo1.value; // si no selecciona, dejamos lo que escribió
    // } quite esto MI

    // Solo se define regexCorreo una vez:
    //const regexCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|com\.mx|org|org\.mx|edu|edu\.mx|mx)$/; quite esto MI
    const regexCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    // Validamos usando correoCompleto
    if (!regexCorreo.test(correoCompleto)) {
        iptCorreo1.style.setProperty("border", "1px solid #DD0069", "important");
        iptCorreo1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML += "<strong>Ingresa un correo electrónico válido (sin espacios ni mayúsculas y con dominio correcto).</strong><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    /** -----------------------------------------------------------------------------------------------------------------------------
     * Validación del campo Teléfono
     */
    const regexTelefono = ;
    if (!regexTelefono.test(txtTelefono1.value)) {
        txtTelefono1.style.setProperty("border", "1px solid #DD0069", "important");
        txtTelefono1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
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
        if (/^(\d)\1{9}$/.test(txtTelefono1.value) || esSecuenciaAscDesc(txtTelefono1.value) || esPatronRepetitivo(txtTelefono1.value)) {
            txtTelefono1.style.setProperty("border", "1px solid #DD0069", "important");
            txtTelefono1.style.boxShadow = "0 0 6px 3px rgba(221, 0, 107, 0.6)";
            alertValidacionesTexto.innerHTML += "<strong>Ingresa un teléfono válido, no repetido ni secuencial.</strong><br>";
            alertValidaciones.style.display = "block";
            isValid = false;
        }
    }

    /**-----------------------------------------------------------------------------------------------------------------------------
     * para validar campo Especificaciones
     */
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
    //Si todo esta bien, enviar
    if (isValid) {
        btnEnviar.innerText = "Enviando...";
        const serviceID = 'default_service';
        const templateID = 'template_s6w5oib';
        // Antes de llamar a emailjs.sendForm
        // Para que envie correctamente el correo y DOMINIO- el value del input para que contenga todo el correo MI
        iptCorreo1.value = correoCompleto;


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
        //-------------------------------LIMPIAR CAMPOS----------------------------------------------------------
        txtEmpresa.value = "";// Limpia el valor de txtName
        txtEmpresa.focus(); // Coloca el cursor en la casilla txtName;
        iptCorreo1.value = ""; //Limpia el valor de iptCorreo1
        iptCorreoDominio.value = ""; //Limpia el valor de iptCorreoDominio
        txtTelefono1.value = ""; // Limpia el valor de teléfono
        txtEspecificaciones.value = "";
        contadorCaracteres.innerText = "0/500";
    }
});
//-----------------------CONTADOR DE CARACTERES EN TEXTAREA---------------------------------
txtEspecificaciones.addEventListener("input", function () {
    //let caracteresActuales = txtEspecificaciones.value.length; Contar cuántos lleva EN MI lo quite
    contadorCaracteres.innerText = `${txtEspecificaciones.value.length}/500`;
});
//-----------------------FORZAR MINÚSCULAS Y QUITAR ESPACIOS EN BLANCO DEL CORREO-------------------
iptCorreo1.addEventListener('input', () => {
    iptCorreo1.value = iptCorreo1.value.toLowerCase().replace(/\s/g, '');
});
iptCorreoDominio.addEventListener('input', () => {
    iptCorreoDominio.value = iptCorreoDominio.value.toLowerCase().replace(/\s/g, '');
});
