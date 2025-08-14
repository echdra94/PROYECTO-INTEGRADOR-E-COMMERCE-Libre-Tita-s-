document.addEventListener("DOMContentLoaded", mostrarCarrito);

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const container = document.getElementById("carrito-container");
    container.innerHTML = ''; // limpiar antes de mostrar
    let total = 0;

    carrito.forEach((producto, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("col");

        itemDiv.innerHTML = `
            <div class="card h-100">
                <img src="${producto.img}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.descr}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <p class="card-text">Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger btn-eliminar">Eliminar</button>
                </div>
            </div>
        `;
        container.appendChild(itemDiv);

        total += producto.precio * producto.cantidad;

        // Evento eliminar
        const botonEliminar = itemDiv.querySelector(".btn-eliminar");
        botonEliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito(); // refrescar la vista
        });
    });

    document.getElementById("total-amount").innerText = total;
}
