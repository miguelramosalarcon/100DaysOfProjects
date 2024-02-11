const iconMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector("ul");
const menuItem = document.querySelectorAll("ul li a");
const body = document.querySelector("body");

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("hide");
  body.classList.toggle("menu-open"); // Agrega o quita la clase para oscurecer el fondo
});

closeMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("hide");
  body.classList.toggle("menu-open"); // Agrega o quita la clase para oscurecer el fondo
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
    menu.classList.toggle("hide");
    body.classList.toggle("menu-open"); // Agrega o quita la clase para oscurecer el fondo
  });
}
