document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        cards.forEach(function (card) {
            const cardText = card.innerText.toLowerCase();
            if (cardText.includes(searchText)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
