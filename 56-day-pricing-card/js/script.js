const checkboxes = document.querySelectorAll('input[type="radio"]');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function () {
    document.querySelectorAll(".card__container").forEach((cardContainer) => {
      cardContainer.classList.remove("border-blue");
    });

    const cardContainer = this.closest(".card__container");

    if (this.checked) {
      cardContainer.classList.add("border-blue");
    }
  });

  if (index === 0) {
    checkbox.checked = true;
    const cardContainer = checkbox.closest(".card__container");
    cardContainer.classList.add("border-blue");
  }
});
