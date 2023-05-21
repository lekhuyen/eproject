// JavaScript code
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.item-1');

searchInput.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();

    cards.forEach(function (card) {
        const courseName = card.querySelector('.name-course span').textContent.toLowerCase();

        if (courseName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});