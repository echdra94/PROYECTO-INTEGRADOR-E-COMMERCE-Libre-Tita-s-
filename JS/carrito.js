const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");
const h2carrito = document.getElementById("h2carrito");
const burroTriste = document.getElementById("burroTriste");

// Leer carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para mostrar productos en la tabla
function mostrarCarrito() {
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<tr><td colspan="4" class="text-center">El carrito está vacío</td></tr>`;
        h2carrito.textContent = "Tu carrito está vacio";
        totalElement.textContent = "Total: $0.00";
        burroTriste.style.display = "block";
        return;
    }else{
       h2carrito.textContent = "Tu carrito NO está vacio"; 
       burroTriste.style.display = "none";
    }

    let total = 0;

    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>
                <button class="btn btn-sm btn-secondary btn-restar">-</button>
                <span class="mx-2">${producto.cantidad}</span>
                <button class="btn btn-sm btn-secondary btn-sumar">+</button>
            </td>
            <td>$${subtotal}</td>
        `;
        listaCarrito.appendChild(row);

        // Botones + y -
        const btnSumar = row.querySelector(".btn-sumar");
        const btnRestar = row.querySelector(".btn-restar");

        btnSumar.addEventListener("click", () => {
            producto.cantidad++;
            guardarYRefrescar();
        });

        btnRestar.addEventListener("click", () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                carrito.splice(index, 1);
            }
            guardarYRefrescar();
        });
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Guardar en localStorage y refrescar la tabla
function guardarYRefrescar() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", mostrarCarrito);
