const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".menu");

function toggleMenu() {
  menuIcon.classList.toggle("open");
  menuItems.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenu);
