const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');


emailInput.addEventListener('input', function () {
  const email = emailInput.value.trim();
  if (email === '') {
    showError('¡Vaya! Parece que olvidaste agregar tu correo electrónico');
  } else if (!validateEmail(email)) {
    showError('Proporcione una dirección de correo electrónico válida');
  } else {
    hideError();
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const email = emailInput.value.trim();

  if (email === '') {
    showError('¡Vaya! Parece que olvidaste agregar tu correo electrónico');
  } else if (!validateEmail(email)) {
    showError('Proporcione una dirección de correo electrónico válida');
  } else {
    hideError();
    
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(errorMessage) {
  hideError(); 
  
  const error = document.createElement('p');
  error.classList.add('error_text');
  error.textContent = errorMessage;

  form.appendChild(error);
  form.classList.add('error');
}

function hideError() {
  const error = form.querySelector('.error_text');
  if (error) {
    form.removeChild(error);
    form.classList.remove('error');
  }
}
