document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const iconContainer = document.querySelector('.icon__container');

    // Configurar AlertifyJS para mostrar notificaciones en la parte superior
    alertify.set('notifier', 'position', 'top-right');

    iconContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Detener la propagación del evento click

        const emailValue = emailInput.value.trim(); // Obtener el valor del campo de correo electrónico y eliminar espacios en blanco

        if (!isValidEmail(emailValue)) { // Verificar si el correo electrónico es válido
            alertify.error('Por favor, ingrese un correo electrónico válido.');
            emailInput.focus(); // Colocar el foco en el campo de correo electrónico
        } else {
            // El correo electrónico es válido, mostrar mensaje de éxito
            alertify.success(`¡Bienvenido ${emailValue}!`);

            // Después de 2 segundos, abrir la página web en una nueva pestaña
            setTimeout(function() {
                window.open('https://frontend-club.bullet.site/', '_blank');
            }, 2000);

            // Desplazar la ventana de vuelta a la parte superior de la página
            window.scrollTo(0, 0);
        }
    });

    function isValidEmail(email) {
        // Patrón para validar direcciones de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email); // Verificar si el correo electrónico coincide con el patrón
    }
});
