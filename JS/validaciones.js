const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const txtEmpresa = document.getElementById("txtEmpresa");


btnEnviar.addEventListener("click", function (event){
    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML="";// Limpia la alerta
    alertValidaciones.style.display="none"; // Limpia el fondo de la alerta
    txtEmpresa.style.boxShadow= "none";
    txtEmpresa.style.border="";// limpia el borde rojo del campo name cuando hay alerta
    
    if (txtEmpresa.value.length<3){
        txtEmpresa.style.border="thin solid #DD0069";
        txtEmpresa.style.boxShadow= "0 0 6px 3px rgba(221, 0, 107, 0.6)";
        alertValidacionesTexto.innerHTML="<strong>Ingresa un nombre válido</strong><br>"; // Alerta
        alertValidaciones.style.display="block"; // Fondo de alerta del div
        isValid = false;
    }

     if(isValid){
        txtEmpresa.value="";// Limpia el valor de txtName
        txtEmpresa.focus(); // Coloca el cursor en la casilla txtName;
     }
}
);