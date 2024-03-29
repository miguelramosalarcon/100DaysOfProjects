document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.email');
    subscribeButton.addEventListener('click', function() {
        const emailInput = document.querySelector('.inputEmail');
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // Email válido, mostrar mensaje de suscripción
            alertify.success('Thanks for your subscription');
            // Aquí puedes enviar el formulario si lo deseas
        } else {
            // Email no válido, mostrar mensaje de error
            alertify.error('Please enter a valid email address');
        }
    });
});

function validateEmail(email) {
    // Expresión regular para validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
