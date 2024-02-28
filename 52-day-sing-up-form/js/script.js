document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createAccountButton').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        
        // Obtener los valores de los campos de entrada
        var firstName = document.getElementById('first-name').value.trim();
        var lastName = document.getElementById('last-name').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        // Validar los campos de entrada
        if (!validateEmptyFields(firstName, lastName, email, password)) {
            // Mostrar mensaje de error si hay campos vacíos
            return;
        }
        
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
            title: '¡Registro exitoso!',
            text: 'Tu cuenta ha sido creada correctamente.'
        }).then(function() {
            // Aquí puedes redirigir al usuario a otra página o realizar cualquier otra acción necesaria
            document.querySelector('.card__form').submit();
        });
    });
});

// Función para validar campos vacíos
function validateEmptyFields(firstName, lastName, email, password) {
    if (firstName === '' || lastName === '' || email === '' || password === '') {
        // Mostrar mensaje de error si hay campos vacíos
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos.'
        });
        return false;
    }
    return true;
}

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
