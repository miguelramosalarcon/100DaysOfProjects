document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const userCards = document.querySelectorAll('.user__card');
    const menuIcon = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('.nav');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.trim().toLowerCase();

        userCards.forEach(card => {
            const cardName = card.querySelector('.user__name').textContent.toLowerCase();
            const cardLocate = card.querySelector('.user__locate').textContent.toLowerCase();
            const spans = card.querySelectorAll('.user__span');
            let found = false;

            spans.forEach(span => {
                if (span.textContent.toLowerCase().includes(searchText)) {
                    found = true;
                }
            });

            if (cardName.includes(searchText) || cardLocate.includes(searchText) || found) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    menuIcon.addEventListener('click', function() {
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'flex';
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            navMenu.style.display = 'none';
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
});
