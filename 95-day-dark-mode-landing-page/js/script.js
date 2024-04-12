document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById('signup');
    const emailInput = document.getElementById('email');

    signUpButton.addEventListener('click', () => {
        const email = emailInput.value.trim();

        if (email === "") {
            alertify.error('Please enter an email address.');
            return;
        }

        if (!isValidEmail(email)) {
            alertify.error('Please enter a valid email address.');
            return;
        }

        // Aquí puedes realizar otras validaciones si es necesario

        // Si todas las validaciones son exitosas, muestra un mensaje de éxito
        alertify.success('Email successfully submitted!');
    });

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
        toggleMenuIcon();
    });

    function toggleMenuIcon() {
        menuToggle.classList.toggle('bx-menu-alt-right');
        menuToggle.classList.toggle('bx-x-circle');
    }
});
