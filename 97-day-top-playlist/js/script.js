document.addEventListener("DOMContentLoaded", function() {
    let currentAudio = null; // Variable para almacenar el elemento de audio de la canción actual
    let currentButton = null; // Variable para almacenar el botón de reproducción de la canción actual

    // Fetch del archivo JSON con la lista de canciones
    fetch('./json/list.json')
        .then(response => response.json())
        .then(data => {
            const playButtons = document.querySelectorAll('.icon-play');

            // Iterar sobre cada botón de reproducción existente
            playButtons.forEach((button, index) => {
                // Obtener la información de la canción correspondiente del JSON
                const song = data[index];
                if (!song) return; // Salir si no hay información para este botón

                // Crear elemento de reproducción para la canción
                const audio = new Audio(song.src);

                // Agregar evento de clic al botón de reproducción
                button.addEventListener('click', function() {
                    if (currentAudio && currentAudio !== audio) {
                        // Detener la reproducción de la canción anterior si hay una reproducción en curso
                        currentAudio.pause();
                        currentAudio.currentTime = 0; // Reiniciar la reproducción al principio

                        // Restaurar el icono de reproducción (play) del botón anterior
                        if (currentButton) {
                            currentButton.classList.remove("fa-pause-circle");
                            currentButton.classList.add("fa-circle-play");
                        }
                    }

                    if (audio.paused) {
                        // Iniciar la reproducción de la canción actual si está pausada
                        audio.play();
                        button.classList.remove("fa-circle-play");
                        button.classList.add("fa-pause-circle");
                    } else {
                        // Pausar la reproducción de la canción actual si está en curso
                        audio.pause();
                        button.classList.remove("fa-pause-circle");
                        button.classList.add("fa-circle-play");
                    }

                    // Actualizar la referencia al elemento de audio y al botón actual
                    currentAudio = audio;
                    currentButton = button;
                });
            });
        })
        .catch(error => console.error('Error al cargar las canciones:', error));
});


