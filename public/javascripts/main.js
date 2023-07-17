var x = 3;
var mainID = "";
var totalVal = 0;
var cardsAvailable = 0;
newDeck().then(val => {
    mainID = val
}
)

function newDeck() {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(json => {
            var id = json.deck_id;
            return id;
        });
}

function getACard(deck) {
    return fetch('https://deckofcardsapi.com/api/deck/' + deck + '/draw/?count=5')
        .then(res => res.json())
        .then(json => {
            const data = json;
            console.log(data);
            return data;
        });
}
function pickAcard() {
    var cards = document.getElementById("cardValue");
    getACard(mainID).then(cardValue => {
        var tests = document.getElementsByClassName("cardSet");
        var names = document.getElementsByClassName("cardInfo");
        var setVal = document.getElementById("mainVal");
        var getAmt = document.getElementById("cardsLeft");

        let totalVal = 0;

        const valueMap = {
            "JACK": 10,
            "KING": 10,
            "QUEEN": 10,
            "ACE": 1,
        };

        // Clear existing images and text content
        for (let i = 0; i < tests.length; i++) {
            tests[i].style.visibility = "hidden";
            tests[i].removeAttribute("src");
            names[i].textContent = "";
        }

        // Populate with new card values
        for (let i = 0; i < cardValue.cards.length; i++) {
            const card = cardValue.cards[i];
            names[i].textContent = `${card.value} of ${card.suit}`;
            tests[i].src = card.image;
            tests[i].style.visibility = "visible";
            totalVal += valueMap[card.value] || parseInt(card.value);
        }
        cardsAvailable = cardValue.remaining;
        console.log(cardsAvailable);
        getAmt.textContent = cardsAvailable;
        //console.log(totalVal);
        setVal.textContent = totalVal;
        //imgID.src = cardValue[2];
        //cards.innerText = cardValue[0] + " of " + cardValue[1];
        console.log(cardValue[1]);
    });
}



function PullNewDeck() {
    location.reload();
}