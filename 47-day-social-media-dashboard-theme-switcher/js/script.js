const switchButton = document.getElementById("switch");
const body = document.body;
let isDarkTheme = body.classList.contains('dark');

switchButton.addEventListener('click', () => {
  switchButton.classList.toggle('off');
  isDarkTheme = !isDarkTheme;
  body.classList.toggle('dark', isDarkTheme);
  body.classList.toggle('light', !isDarkTheme);
});
