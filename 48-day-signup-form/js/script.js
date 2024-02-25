document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        if (!isValidEmail(emailInput.value)) {
            emailError.style.display = 'block'; // Muestra el mensaje de error si el correo electrónico no es válido
        } else {
            // Muestra un mensaje de SweetAlert indicando que la descarga está en curso
            Swal.fire({
                icon: 'success',
                title: 'Descarga en curso...',
                showConfirmButton: false,
                timer: 1500 // Duración del mensaje en milisegundos
            }).then(() => {
                // Una vez que el mensaje desaparece, envía el formulario
                form.submit();
            });
        }
    });

    function isValidEmail(email) {
        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // Devuelve true si el correo electrónico es válido
    }
});
