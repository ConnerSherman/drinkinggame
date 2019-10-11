var Zuruecklegen = false;

var Namen = [];
var counter = 0;
var rounds = 1;

var maxRoundsTillNonPlayerCard = 5;
var roundsTillNonPlayerCard = Math.floor((Math.random() * maxRoundsTillNonPlayerCard) + 1);

function start() {
	if(Cards.length == 0 && npCards.length == 0){
		break
	}else if(Cards.length == 0){
		roundsTillNonPlayerCard = 0;
	}
  console.log(roundsTillNonPlayerCard);
  if(roundsTillNonPlayerCard == 0){
    roundsTillNonPlayerCard = Math.floor((Math.random() * maxRoundsTillNonPlayerCard) + 1);
    pickCard(false);
  }else{
    pickCard(true);
    cycleThroughNames();
    roundsTillNonPlayerCard--;
  }
	
}

function pickCard(playerCard) {
  if(playerCard){
    setBackgroundColor("#FFce73");
    $(".playerInfo").show();
    var randomCard = Math.floor(Math.random() * Cards.length);
    document.getElementById("Card").innerHTML = Cards[randomCard];
    if (Zuruecklegen != true) {
      Cards.splice(randomCard, 1); 
    }
  }else{
    setBackgroundColor("#73ff88");
    var randomCard = Math.floor(Math.random() * npCards.length);
    document.getElementById("Card").innerHTML = npCards[randomCard];
    if (Zuruecklegen != true) {
      npCards.splice(randomCard, 1); 
    }
    if (npCards.length == 0){
      roundsTillNonPlayerCard = -1;
    }
    $(".playerInfo").hide();
  }
	   
}

function cycleThroughNames() {
	document.getElementById("Name").innerHTML = Namen[counter] + "s Runde";
	document.getElementById("Runde").innerHTML = "Runde " + rounds;
	if(counter < Namen.length - 1){
		counter += 1;
	}else{
		rounds += 1;
		counter = 0;
	}
}

/**
* sets Background Color of body to newColor
*/
function setBackgroundColor(newColor)
{
	$("body").css("backgroundColor", newColor);
}
