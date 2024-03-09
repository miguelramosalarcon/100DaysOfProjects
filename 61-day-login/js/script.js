function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePasswordIcon = document.getElementById("togglePasswordIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.classList.remove("fa-eye");
        togglePasswordIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePasswordIcon.classList.remove("fa-eye-slash");
        togglePasswordIcon.classList.add("fa-eye");
    }
}

// Validaciones email y password
document.addEventListener('DOMContentLoaded', function() {
    // Bloquear clic derecho en toda la página
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Desactivar selección de texto en toda la página
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // Agregar event listener al botón "Log in"
    document.querySelector('.login').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        // Obtener los valores de los campos de entrada
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        // Validar los campos de entrada
        if (!validateEmail(email)) {
            // Mostrar mensaje de error si el email no es válido
            return;
        }
        
        if (!validatePassword(password)) {
            // Mostrar mensaje de error si la contraseña no es válida
            return;
        }

        // Si todos los campos son válidos, puedes enviar el formulario
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Has iniciado sesión correctamente.'
        }).then(function() {
            // Aquí puedes enviar el formulario si es necesario
            // document.querySelector('.form').submit();
        });
    });
});

// Función para validar el formato del email
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        // Mostrar mensaje de error si el email no es válido
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, introduce un email válido.'
        });
        return false;
    }
    return true;
}

// Función para validar la contraseña
function validatePassword(password) {
    if (password.length < 8 || hasForbiddenCharacters(password)) {
        // Mostrar mensaje de error si la contraseña no es válida
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener al menos 8 caracteres y no puede contener caracteres prohibidos.'
        });
        return false;
    }
    return true;
}

// Función para verificar si la contraseña contiene caracteres prohibidos
function hasForbiddenCharacters(password) {
    var forbiddenCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
    return forbiddenCharacters.some(function(char) {
        return password.includes(char);
    });
}