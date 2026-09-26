document.addEventListener("DOMContentLoaded", function () {
    const formEmail = document.getElementById("loginForm");
    const inputEmail = document.getElementById("emailInput");

    if (formEmail) {
        formEmail.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que la página se recargue

            const correo = inputEmail.value.trim();

            if (correo !== "") {
                alert("¡Bienvenido/a! Has ingresado con el correo: " + correo);

                
                inputEmail.value = "";
            }
        });
    }
    const botonesMas = document.querySelectorAll(".btn-mas");
    const spanNum = document.querySelector(".num");

    if (spanNum && botonesMas.length > 0) {
        let contador = 0;

        botonesMas.forEach(function (boton) {
            boton.addEventListener("click", function (event) {
                event.preventDefault();
                contador++;
                spanNum.textContent = contador;
            });
        });
    }
    const contenedor = document.getElementById("videoContainer");
    const video = document.getElementById("miVideo");

    if (contenedor && video) {
        contenedor.addEventListener("mouseenter", function () {
            contenedor.classList.add("active");
            video.pause();
        });

        contenedor.addEventListener("mouseleave", function () {
            contenedor.classList.remove("active");
            video.play();
        });
    }
});