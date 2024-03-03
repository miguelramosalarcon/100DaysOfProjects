const checkboxes = document.querySelectorAll('input[type="radio"]');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function () {
    document.querySelectorAll(".card__container").forEach((cardContainer) => {
      cardContainer.classList.remove("border-blue");
    });

    const cardContainer = this.closest(".card__container");

    if (this.checked) {
      cardContainer.classList.add("border-blue");
    }
  });

  if (index === 0) {
    checkbox.checked = true;
    const cardContainer = checkbox.closest(".card__container");
    cardContainer.classList.add("border-blue");
  }
});

//Peticion de correo electronico
// Obtenemos el botón con id "btn-continue"
const btnContinue = document.getElementById("btn-continue");

// Cuando se hace clic en el botón, mostramos el mensaje de SweetAlert
btnContinue.addEventListener("click", function() {
    // Mostramos el modal de SweetAlert
    Swal.fire({
        title: 'Ingresa tu correo electrónico',
        input: 'email',
        inputPlaceholder: 'Correo electrónico',
        showCancelButton: true,
        confirmButtonText: 'Activar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
            
            return email;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            
            Swal.fire(
                'Gracias por tu suscripción',
                `Correo electrónico: ${result.value}`,
                'success'
            );
        }
    });
});