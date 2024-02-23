document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('list');
  new Sortable(list, {
      animation: 150, 
      ghostClass: 'ghost',
      onEnd: function (evt) {
          console.log('Elemento movido de', evt.oldIndex, 'a', evt.newIndex);
      }
  });
});
