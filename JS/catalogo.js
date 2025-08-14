const itemsContainer = document.getElementById("list-items");

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    fetch("./JS/productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                addItem(product);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

function addItem(item) {
    // Crear un div contenedor para cada producto con las clases de Bootstrap
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-3"); 

    itemDiv.innerHTML = `
        <div class="card h-100">
            <img src="${item.img}" class="card-img-top" alt="image">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.descr}</p>
                <p class="card-text mt-auto">Precio: $${item.precio}</p>
                <button class="btn btn-primary btn-agregar mt-2">Agregar</button>
            </div>
        </div>
    `;

    itemsContainer.appendChild(itemDiv);

    // Evento para agregar al carrito
    const boton = itemDiv.querySelector(".btn-agregar");
    boton.addEventListener("click", () => {
        agregarAlCarrito(item);
    });
}

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Revisar si el producto ya está en el carrito
    const index = carrito.findIndex(p => p.name === producto.name); // o usa un ID único si lo tienes
    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.name} agregado al carrito`);
}
