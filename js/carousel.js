"use strict";

function inicializarCarrusel() {
    const contenedor = document.querySelector(".carousel-container");

    if (!contenedor) {
        return;
    }

    const slide = contenedor.querySelector(".slide");
    const next = contenedor.querySelector(".next");
    const prev = contenedor.querySelector(".prev");

    if (!slide || !next || !prev) {
        return;
    }

    // Evita registrar los eventos más de una vez sobre el mismo carrusel.
    if (contenedor.dataset.inicializado === "true") {
        return;
    }

    contenedor.dataset.inicializado = "true";

    next.addEventListener("click", function () {
        const items = slide.querySelectorAll(".item");
        if (items.length > 1) {
            slide.appendChild(items[0]);
        }
    });

    prev.addEventListener("click", function () {
        const items = slide.querySelectorAll(".item");
        if (items.length > 1) {
            slide.prepend(items[items.length - 1]);
        }
    });
}

// El carrusel se carga dinámicamente después de que el DOM inicializa.
document.addEventListener("DOMContentLoaded", function () {
    inicializarCarrusel();
});
