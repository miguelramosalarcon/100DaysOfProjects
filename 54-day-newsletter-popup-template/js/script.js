document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const subscribeButton = document.querySelector(".input__button");

    subscribeButton.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Correo no válido',
                text: 'Ingresa un email válido.',
                confirmButtonColor: '#2355F2',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Subscripción Exitosa!',
                html: `Tu email <strong>${email}</strong> ha sido registrado. Gracias por tu suscripción!`,
                confirmButtonColor: '#2355F2',
            });

        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


