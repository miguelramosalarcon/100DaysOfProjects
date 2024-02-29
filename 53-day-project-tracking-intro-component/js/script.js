var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

function hideHam() {
  var element = document.getElementById("hamburguer");
  element.classList.toggle("mystyle");
}
