const shareOption = document.querySelector('.share-option');

document.querySelector('.share-button').addEventListener('click', function () {
  this.classList.toggle('active');
  shareOption.classList.toggle('active');
});