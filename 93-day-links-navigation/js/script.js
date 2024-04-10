document.addEventListener("DOMContentLoaded", function() {
    const blogInfoItems = document.querySelectorAll(".blog__info");

    // Agregar el evento clic a cada elemento .blog__info
    blogInfoItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Eliminar la clase 'clicked' de todos los elementos blog__info
            blogInfoItems.forEach(function(item) {
                item.classList.remove("clicked");
            });

            // Agregar la clase 'clicked' solo al elemento clicado
            item.classList.add("clicked");
        });
    });
});
