const modoElement = document.getElementById('modo');
  const bodyElement = document.body;

  modoElement.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');

    // Cambiar el ícono del modo
    const iconElement = modoElement.querySelector('i');
    iconElement.classList.toggle('fa-toggle-on');
    iconElement.classList.toggle('fa-toggle-off');
  });
