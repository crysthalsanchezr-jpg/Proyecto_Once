function cargaPagina(pagina) {

    fetch('pages/' + pagina)

        .then(response => {

            if (!response.ok) {
                throw new Error('Error al cargar la pagina');
            }

            return response.text();
        })

        .then(data => {

            document.getElementById('contenido').innerHTML = data;

            localStorage.setItem("paginaActual", pagina);

            if (typeof inicializarCarrusel === "function") {
                inicializarCarrusel();
            }

        })

        .catch(error => {

            document.getElementById('contenido').innerHTML =
                "<div class=\"container py-5 text-center\"><p>No se pudo cargar la página solicitada.</p></div>";

            console.error(error);

        });
}


document.addEventListener("DOMContentLoaded", function () {

    cargaPagina("home.html");

});



















