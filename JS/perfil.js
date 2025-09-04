const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  // Si no hay sesión, redirige al login
  window.location.href = "login.html";
}

function updatePerfil() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const cardUsuario = document.getElementById("CardUsuario");
  //const logoutBtns = document.querySelectorAll(".logout-btn");
  const nombreGrande = document.getElementById("nombreGrande")

  if (user) {
    if (cardUsuario) {
      nombreGrande.innerText = ` ${user.nombre}`
      nombre.innerText = ` ${user.nombre} ${user.apellido}`;
      correo.innerText = `${user.correo}`;
      telefono.innerText = `${user.telefono}`;


    }
  }
}

// Escuchar la función cuando ya está cargada la página
document.addEventListener("DOMContentLoaded", updatePerfil);
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

btnCerrarSesion.addEventListener("click", function () {
  // Elimina el usuario activo del localStorage
  localStorage.removeItem("loggedInUser");

  // Redirige al login
  window.location.href = "login.html";
});


