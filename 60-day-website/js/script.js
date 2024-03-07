document.getElementById('search').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var cards = document.querySelectorAll('.card__item');
  
  cards.forEach(function(card) {
      var title = card.querySelector('.card__title').innerText.toLowerCase();
      var description = card.querySelector('p').innerText.toLowerCase();
      
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
});