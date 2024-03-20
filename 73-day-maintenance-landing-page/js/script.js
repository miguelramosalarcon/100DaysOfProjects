document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const headerNav = document.getElementById("header__nav");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", function() {
        headerNav.classList.toggle("show");
        menuToggle.classList.toggle("bx-menu");
        menuToggle.classList.toggle("bx-x");
    });
});
