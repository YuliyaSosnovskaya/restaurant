import cards from '../data/menuCards.js';

let cardsToDisplay = cards;
const conteinerCeruselCards = document.getElementById('containerMenu');
const leftCaruselButton = document.getElementById('leftCaruselButton');
const rightCaruselButton = document.getElementById('rightCaruselButton');

leftCaruselButton.addEventListener('click', () => moveCards('left'));
rightCaruselButton.addEventListener('click', () => moveCards('right'));

displayCards();

function displayCards() {
  for(let i = 0; i < 4; i++) {
    const card = createCard(cardsToDisplay[i]);
    conteinerCeruselCards.append(card);
  }
}

function clearCards() {
  while (conteinerCeruselCards.children.length > 0) {
    const child = conteinerCeruselCards.children[0];
    conteinerCeruselCards.removeChild(child);
  }
}

function moveCards(direction) {
  if(direction == 'left') {
    cardsToDisplay.push(cardsToDisplay[0]);
    cardsToDisplay.shift();
  } else {
    cardsToDisplay.unshift(cardsToDisplay.pop());
  }
  clearCards();
  displayCards();
}

function createCard(cardObj) {
  const card = document.createElement('div');
  card.style.background = cardObj.img;
  const cardTitle = document.createElement('span');
  cardTitle.innerHTML = cardObj.title;
  card.append(cardTitle);
  return card;
}
