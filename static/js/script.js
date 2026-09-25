document.addEventListener("DOMContentLoaded", function() {
  const contenedor = document.getElementById("videoContainer");
  const video = document.getElementById("miVideo");

  if (contenedor && video) {
    contenedor.addEventListener("mouseenter", function() {
      contenedor.classList.add("activo");
      video.pause();
    });

    contenedor.addEventListener("mouseleave", function() {
      contenedor.classList.remove("activo");
      video.play();
    });
  }
});
