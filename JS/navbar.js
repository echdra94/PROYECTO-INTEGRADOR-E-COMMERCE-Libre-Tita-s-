
document.addEventListener("DOMContentLoaded", () => {// Espera a que todo el contenido del DOM esté completamente cargado

  
  fetch("navbar.html")// Realiza una solicitud para obtener el contenido de navbar.html
    // Cuando se recibe la respuesta, conviértela a texto plano (HTML en string)
    .then(response => response.text())

    // Ya con el HTML en forma de texto, insértalo en el div con ID "navBar"
    .then(data => {
      document.getElementById("navBar").innerHTML = data;
    })

    // Si ocurre algún error (archivo no encontrado, error de red, etc.), lo mostramos en la consola
    .catch(error => console.error("Error cargando navbar:", error));
});
