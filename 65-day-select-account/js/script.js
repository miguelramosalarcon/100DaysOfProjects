
    // Función para manejar el clic en el botón de editar
    function handleEditClick(nameClass) {
        Swal.fire({
            title: 'Edit Name',
            input: 'text',
            inputLabel: 'Enter new username',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Save',
            showLoaderOnConfirm: true,
            preConfirm: (newName) => {
                // Actualizar el nombre en el h2 con la clase especificada
                document.querySelector('.' + nameClass).textContent = newName;
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    }

    // Agregar un evento de clic a los botones de editar
    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', () => {
            // Obtener la clase del nombre de usuario
            const nameClass = button.closest('.card').querySelector('.name__user').classList[1];
            // Manejar el clic en el botón de editar
            handleEditClick(nameClass);
        });
    });
