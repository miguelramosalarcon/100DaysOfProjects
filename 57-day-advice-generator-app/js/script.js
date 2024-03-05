window.onload = function() {
    populateQuote();
}

let quoteNumber = document.getElementById('quote-number');
let quote = document.getElementById('quote');
let quoteBtn = document.getElementById('generate-quote-btn');

quoteBtn.addEventListener('click', populateQuote);

function populateQuote() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        let advice = data.slip;
        quoteNumber.textContent = advice.id;
        quote.textContent = advice.advice;
    })
    .catch(error => {
        console.error('Error al obtener el consejo:', error);
    });
}
