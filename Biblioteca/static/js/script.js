document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("miVideo");
  const imagen = document.getElementById("miImagen");
  const contenedor = document.getElementById("videoContainer");

  // Al pasar el cursor por encima: oculta el video y muestra la imagen
  contenedor.addEventListener("mouseenter", () => {
    video.pause();               // Pausa la reproducción del video
    video.style.display = "none"; // Oculta el video
    imagen.style.display = "block"; // Muestra la imagen
  });

  // Al quitar el cursor: oculta la imagen y vuelve a reproducir el video
  contenedor.addEventListener("mouseleave", () => {
    imagen.style.display = "none"; // Oculta la imagen
    video.style.display = "block"; // Muestra el video
    video.play();                 // Reanuda la reproducción
  });
});