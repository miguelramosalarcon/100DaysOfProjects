const links = document.getElementById("links");
const hamburger = document.getElementById("hamburger");

hamburger.onclick = () => {
  console.log(hamburger);
  links.classList.toggle("active");
};


// Go to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var goTopButton = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    goTopButton.style.display = "flex";
  } else {
    goTopButton.style.display = "none";
  }
}

document.querySelector(".go-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});
