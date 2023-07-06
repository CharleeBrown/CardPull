var x = 3;
var mainID = "";
newDeck().then(val =>  {
	mainID = val}
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
    return fetch('https://deckofcardsapi.com/api/deck/' + deck + '/draw/?count=1')
        .then(res => res.json())
        .then(json => {
            const data = json;
            return [data.cards[0].value, data.cards[0].suit, data.cards[0].image]
        });
}
function pickAcard(){

        var cards = document.getElementById("cardValue");
        getACard(mainID)
            .then(cardValue => {
				var imgID = document.getElementById("picture");
				imgID.src = cardValue[2];
                cards.innerText = cardValue[0] + " of " + cardValue[1];
				console.log(cardValue[1]);
            });
    
}