document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const continueButton = document.querySelector('.btn.continue');

    continueButton.addEventListener('click', function(event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            // Mostrar mensaje de alerta si el campo de correo electrónico está en blanco
            alertify.error('Please enter your email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            alertify.error('Invalid email address');
            return;
        }

        // Si la validación es exitosa, mostrar un mensaje de éxito
        alertify.success('Login successful');

        
    });
});
