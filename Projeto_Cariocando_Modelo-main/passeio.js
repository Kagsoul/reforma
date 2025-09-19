document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".header h1");
  if (titulo) {
    titulo.style.transition = "opacity 1.5s ease, transform 1.5s ease";
    titulo.style.opacity = "0";
    titulo.style.transform = "translateY(-20px)";
    setTimeout(() => {
      titulo.style.opacity = "1";
      titulo.style.transform = "translateY(0)";
    }, 300);
  }

  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      logo.style.transition = "transform 0.5s ease";
      logo.style.transform = "rotate(360deg)";
      setTimeout(() => {
        logo.style.transform = "rotate(0deg)";
      }, 600);
    });
  }

  const imagens = document.querySelectorAll(".tamanho");
  imagens.forEach(img => {
    img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 0 12px #ff6347";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });
});

