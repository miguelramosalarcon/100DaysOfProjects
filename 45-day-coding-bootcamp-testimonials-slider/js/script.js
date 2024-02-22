var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Ocultamos todos los slides
  }
  
  slides[slideIndex - 1].style.display = "flex"; // Mostramos el slide actual
  
  // Aplicamos fadeIn al nuevo slide
  var fadeIn = function(element, duration) {
    var increment = 25 / duration;
    var opacity = 0;
    var interval = setInterval(function() {
      opacity += increment;
      element.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 25);
  };
  
  fadeIn(slides[slideIndex - 1], 700); // 500ms es la duración de la animación de fadeIn
}
