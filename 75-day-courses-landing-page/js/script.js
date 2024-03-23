// Obtener referencias a los elementos relevantes del DOM
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.fa-arrow-left');
const nextButton = document.querySelector('.fa-arrow-right');

// Determinar el número máximo de slides que se mostrarán en diferentes tamaños de pantalla
let maxVisibleSlides = 1; // Por defecto, en pantallas pequeñas

if (window.innerWidth >= 768 && window.innerWidth < 1200) {
  maxVisibleSlides = 2; // En pantallas medianas
} else if (window.innerWidth >= 1200) {
  maxVisibleSlides = 4; // En pantallas grandes
}

// Función para mostrar los slides apropiados
function showSlides(startIndex) {
  slides.forEach((slide, index) => {
    if (index >= startIndex && index < startIndex + maxVisibleSlides) {
      slide.classList.remove('hidden');
    } else {
      slide.classList.add('hidden');
    }
  });
}

// Manejar el clic en los botones de navegación
let startIndex = 0;

prevButton.addEventListener('click', () => {
  startIndex--; // Avanza al slide anterior
  if (startIndex < 0) {
    startIndex = slides.length - 1; // Si es el primer slide, ir al último
  }
  showSlides(startIndex);
});

nextButton.addEventListener('click', () => {
  startIndex++; // Avanza al siguiente slide
  if (startIndex >= slides.length) {
    startIndex = 0; // Si es el último slide, ir al primero
  }
  showSlides(startIndex);
});

// Mostrar los slides iniciales
showSlides(startIndex);

// Actualizar la cantidad de slides visibles al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    maxVisibleSlides = 2;
  } else if (window.innerWidth >= 1200) {
    maxVisibleSlides = 3;
  } else {
    maxVisibleSlides = 1;
  }
  showSlides(startIndex);
});
