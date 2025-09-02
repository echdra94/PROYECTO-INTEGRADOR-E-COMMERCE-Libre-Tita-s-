

function updatePerfil() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const cardUsuario = document.getElementById("CardUsuario");
  //const logoutBtns = document.querySelectorAll(".logout-btn");
  const nombreGrande = document.getElementById("nombreGrande")

  if (user) {
    if (cardUsuario){ 
        nombreGrande.innerText = ` ${user.nombre}`
        nombre.innerText = ` ${user.nombre} ${user.apellido}`;
        correo.innerText = `${user.correo}`;
        telefono.innerText = `${user.telefono}`;
    
    
  } 
}
}

// Escuchar la función cuando ya está cargada la página
document.addEventListener("DOMContentLoaded", updatePerfil);
