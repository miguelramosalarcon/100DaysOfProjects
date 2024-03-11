document.addEventListener('DOMContentLoaded', function() {
    const eventTitles = document.querySelectorAll('.event__info-title');
    const eventButtons = document.querySelectorAll('.event__add-btn');

    alertify.set('notifier', 'position', 'top-right');

    eventTitles.forEach(title => {
        title.addEventListener('click', () => {
            showAlert(title.textContent); // Pasar el texto del título como argumento
        });
    });

    eventButtons.forEach(button => {
        button.addEventListener('click', () => {
            showAlert(button.closest('.event').querySelector('.event__info-title').textContent); // Encontrar el título dentro del evento
        });
    });

});

function showAlert(eventTitle) {
    const coloredEventTitle = `<span style="color:goldenrod;">${eventTitle}</span>`;
    alertify.notify(`<div style="font-family: 'IBM Plex Sans', sans-serif; background-color:#000000;border-radius:20px; color:#ffff;padding:10px; font-size:14px; line-height: 1.5;">Evento "${coloredEventTitle}" añadido a tu calendario</div>`, 'success', 5);
}
