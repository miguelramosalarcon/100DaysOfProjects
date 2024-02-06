
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.onscroll = function () {
  var scrollToTopContainer = document.getElementById('scrollToTopContainer');

  var totalHeight = document.body.scrollHeight - window.innerHeight;

  scrollToTopContainer.style.opacity = (window.scrollY > totalHeight * 0.2) ? '1' : '0';
};


