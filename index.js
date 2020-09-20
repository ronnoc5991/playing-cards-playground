const cardContainer = document.getElementById('card-container');

const shuffleButton = document.getElementById('shuffleButton');
shuffleButton.addEventListener('click', () => {
    renderDeck((shuffle(deck)));
})

const decks = 1;

const suits = ["hearts", "spades", "diamonds", "clubs"];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var deck = [];

function createDeck () {
    for (i = decks; i > 0; i--) {
    suits.map((suit, suitIndex) => {
        values.map((value, valueIndex) => {
            var card = {
            "suit": suit,
            "value": value,
        }
        deck.push(card);
        })
    })
}
renderDeck();
}

function renderDeck () {
    deck.map((card) => {
        var newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.classList.add(`${card.suit}`);
        newCard.classList.add(`${card.value}`);
        newCard.innerText = `${ card.value }`;
        cardContainer.appendChild(newCard);
    })
}

function clearDoc () {
    while (cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.childNodes[0]);
    }
}

function shuffle (oldDeck) {
    clearDoc();
    for (let i = oldDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [oldDeck[i], oldDeck[j]] = [oldDeck[j], oldDeck[i]];
    }
    renderDeck();
}

createDeck();