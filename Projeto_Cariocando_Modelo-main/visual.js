document.addEventListener("DOMContentLoaded", () => {
  const blocos = document.querySelectorAll(".container, .mainnav, .footer, .content");
  blocos.forEach((bloco, i) => {
    bloco.style.opacity = "0";
    bloco.style.transform = "translateY(30px)";
    setTimeout(() => {
      bloco.style.transition = "all 1s ease";
      bloco.style.opacity = "1";
      bloco.style.transform = "translateY(0)";
    }, i * 300);
  });

  const imagens = document.querySelectorAll(".fachada");
  imagens.forEach(img => {
    img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 0 12px #009b3a";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });

  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      logo.style.transition = "transform 0.6s ease";
      logo.style.transform = "rotate(360deg)";
      setTimeout(() => {
        logo.style.transform = "rotate(0deg)";
      }, 700);
    });
  }
});

//https://www.instagram.com/kagsoul/
//https://www.linkedin.com/in/joao-francisco-ab0a66375/
//https://brasilgamezil.netlify.app/