const btnEnviar = document.getElementById("btnEnviar");
const formLogin = document.getElementById('formularioLogin');
     //Trae a los usuarios o datos del local Storage
const datosFormulario = JSON.parse(localStorage.getItem("datosFormulario")) || [];
const emailInput = document.getElementById("txtCorreo")



//Función al hace click en botón Enviar
btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    // Limpiar alertas y bordes
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    alertValidaciones.classList.remove("alert-success");
    alertValidaciones.classList.add("alert-danger");

    let isValid = true;
    
const correo = document.getElementById("txtCorreo").value.trim().toLowerCase();
const contraseña = document.getElementById("txtContraseña").value.trim();
    

// --- VALIDACIÓN CORREO Y CONTRASEÑA -----
  
     // Caso 1: campos vacíos En caso de que los campos estén vacíos
  if (!correo || !contraseña) {
    isValid = false;
    alertValidacionesTexto.innerHTML = "<strong>Completa correo y contraseña.</strong>";
    alertValidaciones.style.display = "block";
  }
// ----VALIDACIÓN CORREO ----
  // Caso 2: Revisa que el correo tenga el formato correcto
  const regexCorreo = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (isValid && !regexCorreo.test(correo)) {
    isValid = false;
    alertValidacionesTexto.innerHTML = "<strong>Formato de correo inválido. Usa ejemplo@dominio.com</strong>";
    alertValidaciones.style.display = "block";
  }
// --- Validación Inicio de Usuario EN LOCAL STORAGE ---
  // Caso 3: correo o contraseña incorrectos
  //--- Busca que el usuario tenga el correo y contra correspondientes ---

  const usuario = datosFormulario.find(u =>
    String(u.correo || "").trim().toLowerCase() === correo &&
    String(u.contraseña || "").trim() === contraseña
  );

  if (isValid && !usuario) {
    isValid = false;
    alertValidacionesTexto.innerHTML = "<strong>Correo y/o Contraseña incorrecta.</strong>";
    alertValidaciones.style.display = "block";
  }

    // --- VALIDACIÓN DE LOGIN EXITOSO -----
    if (isValid) {


  // Si sí es válido, alerta exitosa
        alertValidacionesTexto.innerHTML = "<strong class='text-success'>¡Inicio de sesión exitoso !</strong>";
        alertValidaciones.classList.remove("alert-danger");
        alertValidaciones.classList.add("alert-success");
        alertValidaciones.style.display = "block";
             

        // Limpieza de campos al enviar
        formLogin.reset();
        //correo.focus();

        //Redirige a la p]agina de inicio 

        setTimeout(()=> {
            window.location.href = 'index.html';
        }, 2000);

    } 
        // Si es falso 
      //  contraseña.style.border = "thin red solid";
        //correo.style.border = "thin red solid";
       
    
});
// ------------------- FUNCION PARA MOSTRAR ERRORES -------------------
