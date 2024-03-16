document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");
  
    let currentIndex = 0;
  
    function showTestimonials(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index || i === index + 1) {
          testimonial.classList.remove("hidden");
          
        } else {
          
          testimonial.classList.add("hidden");
        }
      });
  
      dots.forEach((dot, i) => {
        if (i === index / 2) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index * 2;
        showTestimonials(currentIndex);
      });
    });
  
    // Función para mostrar el siguiente testimonial
    function goToNextTestimonial() {
      if (currentIndex < testimonials.length - 2) {
        currentIndex += 2;
      } else {
        currentIndex = 0;
      }
      showTestimonials(currentIndex);
    }
  
    // Función para mostrar el testimonial anterior
    function goToPrevTestimonial() {
      if (currentIndex > 0) {
        currentIndex -= 2;
      } else {
        currentIndex = testimonials.length - 2;
      }
      showTestimonials(currentIndex);
    }
  
    // Llama a las funciones goToNextTestimonial y goToPrevTestimonial cuando se hace clic en los botones de previo y siguiente
    document.querySelector(".carousel-control.prev").addEventListener("click", goToPrevTestimonial);
    document.querySelector(".carousel-control.next").addEventListener("click", goToNextTestimonial);
  
    // Muestra el primer testimonio al cargar la página
    showTestimonials(currentIndex);
  });
  