document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validar campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Verificar que ningún campo esté vacío
        if (name === '' || email === '' || subject === '' || message === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
            });
            return; // Detiene la ejecución si hay campos vacíos
        }

        // Validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, introduce una dirección de correo electrónico válida.',
            });
            return; // Detiene la ejecución si el formato de correo electrónico es inválido
        }

        // Si todos los campos están llenos y el correo electrónico es válido, enviar el formulario
        Swal.fire({
            icon: 'success',
            title: '¡Enviado!',
            text: 'Tu mensaje ha sido enviado correctamente.',
        });

        // Aquí puedes agregar el código para enviar el formulario por AJAX o cualquier otra acción que desees
    });
});
