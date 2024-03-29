document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector('.close');
    const sendFeedbackButton = document.querySelector('.send-feedback');
    const copyLink = document.querySelector('.copy');
    const equisButton = document.querySelector('.equis');
    const cancelButton = document.querySelector('.cancel');
    const cardElement = document.querySelector('.card');
    const faceIcons = document.querySelectorAll('.icon-face');
    const sendButton = document.querySelector('.send');
    const thankyouModal = document.getElementById('thankyou');
    const okButton = thankyouModal.querySelector('button[type="button"]');
    const textarea = document.getElementById('textarea');

    // Evento para mostrar los elementos ocultos y ocultar la tarjeta cuando se hace clic en el botón de cerrar
    equisButton.addEventListener('click', function () {
        sendFeedbackButton.style.display = 'block';
        copyLink.style.display = 'block';
        cardElement.style.display = 'none';
    });

    // Evento para mostrar la tarjeta y ocultar los elementos cuando se hace clic en "Send Feedback"
    sendFeedbackButton.addEventListener('click', function () {
        sendFeedbackButton.style.display = 'none';
        copyLink.style.display = 'none';
        cardElement.style.display = 'flex';
    });

    // Evento para mostrar los elementos ocultos y ocultar la tarjeta cuando se hace clic en "Cancel"
    cancelButton.addEventListener('click', function () {
        sendFeedbackButton.style.display = 'block';
        copyLink.style.display = 'block';
        cardElement.style.display = 'none';
    });

    // Función para resaltar el icono seleccionado y desactivar los demás
    function selectIcon(selectedIcon) {
        faceIcons.forEach(icon => {
            if (icon === selectedIcon) {
                icon.parentNode.classList.add('selected');
            } else {
                icon.parentNode.classList.remove('selected');
            }
        });
    }

    // Agregar evento de clic a cada icono de la cara
    faceIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            selectIcon(icon);
        });
    });

    // Evento para mostrar el mensaje de agradecimiento y ocultar la tarjeta cuando se hace clic en el botón "Send"
    sendButton.addEventListener('click', function () {
        // Validar el contenido del textarea antes de mostrar el modal de agradecimiento
        if (validateTextarea()) {
            thankyouModal.style.display = 'block';
            cardElement.style.display = 'none';
        }
    });

    // Evento para regresar al .card al hacer clic en el botón "OK" y limpiar el textarea
    okButton.addEventListener('click', function () {
        thankyouModal.style.display = 'none';
        cardElement.style.display = 'flex';
        textarea.value = ''; // Limpiar el textarea
    });

    // Función para validar el contenido del textarea
    function validateTextarea() {
        const textareaContent = textarea.value.trim(); // Obtener el contenido del textarea sin espacios en blanco al inicio y al final

        // Verificar si el contenido del textarea está vacío
        if (textareaContent === '') {
            // Mostrar mensaje de error con SweetAlert2 si el textarea está vacío
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your opinion in the text field.',
            });
            return false; // La validación falla
        }

        // Puedes agregar más validaciones aquí según tus requisitos

        return true; // La validación es exitosa
    }
});
