document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.header__btn');
    const submenu = document.querySelector('.submenu');
    const chevronIcon = button.querySelector('i');

    button.addEventListener('click', function () {
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'flex';
            chevronIcon.classList.remove('fa-chevron-down');
            chevronIcon.classList.add('fa-chevron-up');
        } else {
            submenu.style.display = 'none';
            chevronIcon.classList.remove('fa-chevron-up');
            chevronIcon.classList.add('fa-chevron-down');
        }
    });
});