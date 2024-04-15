// Obtener elementos necesarios
const languageDropdownToggle = document.getElementById('languageDropdownToggle');
const dropdown = document.querySelector('.dropdown');
const chevronIcon = languageDropdownToggle.querySelector('.fa-solid');

// Agregar evento de clic al enlace "EN"
languageDropdownToggle.addEventListener('click', function() {
    // Cambiar el estilo del dropdown
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
        chevronIcon.classList.remove('fa-chevron-down');
        chevronIcon.classList.add('fa-chevron-up');
    } else {
        dropdown.style.display = 'none';
        chevronIcon.classList.remove('fa-chevron-up');
        chevronIcon.classList.add('fa-chevron-down');
    }
});