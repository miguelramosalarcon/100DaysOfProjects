document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#navToggler').addEventListener('click', event => {

        event.currentTarget.classList.toggle('active');

        document.querySelector('#navList').classList.toggle('active');
        

        if (!event.currentTarget.classList.contains('active')) {
            document.querySelectorAll('.nav_item.dropdown').forEach(elem => elem.classList.remove('active'));
        }
    });

    // DROPDOWN TOGGLER EVENTS
    document.querySelectorAll('.dropdown_toggler').forEach(toggler => {
       
        toggler.addEventListener('click', event => {
            event.preventDefault();
            const container = event.currentTarget.closest('.dropdown');
            const menu = container.querySelector('ul.dropdown_menu');

            container.classList.toggle('active');

           
            menu.style.maxHeight = (container.classList.contains('active')) ? `calc(${menu.scrollHeight}px + 3.25rem)` : 0;
        });
        
        toggler.addEventListener('blur', event => {
            const container = event.currentTarget.closest('.dropdown');
            container.classList.remove('active');
            container.querySelector('ul.dropdown_menu').removeAttribute('style');
        })
    });

    
    window.matchMedia('(max-width: 768px').addEventListener('change', event => {
        document.querySelector('#navToggler').classList.remove('active');
        document.querySelector('#navList').classList.remove('active');
    });
});