document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".header h1");
  if (titulo) {
    titulo.style.opacity = "0";
    titulo.style.transform = "translateY(-20px)";
    setTimeout(() => {
      titulo.style.transition = "all 1.5s ease";
      titulo.style.opacity = "1";
      titulo.style.transform = "translateY(0)";
    }, 300);
  }

  const navLinks = document.querySelectorAll(".mainnav li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#FFD700"; 
      link.style.textShadow = "0 0 8px #fff";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "#fff";
      link.style.textShadow = "none";
    });
  });

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

  const content = document.querySelector(".content");
  if (content) {
    content.style.opacity = "0";
    content.style.transform = "scale(0.95)";
    setTimeout(() => {
      content.style.transition = "all 1.2s ease";
      content.style.opacity = "1";
      content.style.transform = "scale(1)";
    }, 500);
  }
});
