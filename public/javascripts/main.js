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
    return fetch('https://deckofcardsapi.com/api/deck/' + deck + '/draw/?count=5')
        .then(res => res.json())
        .then(json => {
            const data = json;
            console.log(data);
            return data;
        });
}
function pickAcard(){

        var cards = document.getElementById("cardValue");
        getACard(mainID)
            .then(cardValue => {
                var tests = document.getElementsByClassName("cardSet");
                var names = document.getElementsByClassName("cardInfo")
				var imgID = document.getElementById("picture");
                for(var i=0; i<tests.length; i++) {
                names[i].innerText = cardValue.cards[i].value + " of " + cardValue.cards[i].suit;
                tests[i].src = cardValue.cards[i].image;
                }
				//imgID.src = cardValue[2];
                //cards.innerText = cardValue[0] + " of " + cardValue[1];
				console.log(cardValue[1]);
            });
}

function PullNewDeck(){
	location.reload();
}