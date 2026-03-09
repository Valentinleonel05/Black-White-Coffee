
function toggleMenu() {
  let navbar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  
  navbar.classList.toggle("open");
  menuBtn.classList.toggle("open");
}

// Cerrar menú al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      let navbar = document.querySelector(".navbar");
      let menuBtn = document.querySelector(".menu-btn");
      navbar.classList.remove("open");
      menuBtn.classList.remove("open");
    });
  });
});