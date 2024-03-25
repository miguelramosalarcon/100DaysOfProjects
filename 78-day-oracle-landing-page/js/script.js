const navbar = document.querySelector('#navbar');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click',() => {
    navbar.classList.add('visible');
})

close.addEventListener('click',() => {
    navbar.classList.remove('visible');
})