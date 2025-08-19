const itemsContainer = document.getElementById("list-items");

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    // Cargar productos desde JSON
    fetch("./JS/productos.json")
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar productos.json");
            return response.json();
        })
        .then(products => products.forEach(product => addItem(product)))
        .catch(error => console.error("Error al cargar JSON:", error));

    // Cargar productos agregados recientemente desde localStorage (nuevos productos)
    const nuevosProductos = JSON.parse(localStorage.getItem("productos")) || [];
    nuevosProductos.forEach(product => {
        const item = {
            name: product.nombre,
            descr: product.descripcion,
            precio: product.precio,
            img: product.imagen
        };
        addItem(item);
    });
});

// Función para crear y mostrar cada producto
function addItem(item){
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");

    // Imagen
    const img = document.createElement("img");
    img.src = item.img;
    img.classList.add("card-img-top");
    img.alt = item.name;
    card.appendChild(img);

    // Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Título
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = `<strong><i>${item.name}</i></strong>`;
    cardBody.appendChild(title);

    // Descripción
    const descr = document.createElement("p");
    descr.classList.add("card-text");
    descr.textContent = item.descr;
    cardBody.appendChild(descr);

    // Precio
    const precio = document.createElement("p");
    precio.classList.add("card-text");
    precio.innerHTML = `<strong>$${item.precio}</strong>`;
    cardBody.appendChild(precio);

    // Botón Agregar al carrito
    const addButton = document.createElement("button");
    addButton.textContent = "Agregar";
    addButton.classList.add("btn", "btn-primary", "m-1");
    addButton.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Verificar si ya existe el producto en el carrito
        let existente = carrito.find(p => p.nombre === item.name);

        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({
                nombre: item.name,
                precio: Number(item.precio),
                cantidad: 1
            });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${item.name} agregado al carrito`);
    });
    cardBody.appendChild(addButton);

    // Botón Comprar
    const buyButton = document.createElement("a");
    buyButton.href = "carrito.html";
    buyButton.textContent = "Comprar";
    buyButton.classList.add("btn", "btn-primary", "m-1");
    cardBody.appendChild(buyButton);

    card.appendChild(cardBody);
    itemsContainer.appendChild(card);
}
