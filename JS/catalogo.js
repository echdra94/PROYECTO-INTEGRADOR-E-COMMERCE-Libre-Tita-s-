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
            products.forEach(product => addItem(product));
        })
        .catch(error => {
            console.error("Error:", error);
        });
});


function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.descr+'</p>\n' +
        '        <p class="card-text">$'+item.precio+'</p>\n' +            
        '        <a href="#" class="btn btn-primary">Agregar</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    itemsContainer.innerHTML += itemHTML;
}




