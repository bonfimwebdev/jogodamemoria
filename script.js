const cards = document.quuerySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
}