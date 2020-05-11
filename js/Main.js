var Zuruecklegen = false;

var Namen = [];
var counter = 0;
var rounds = 1;
var controlArray = [];

var maxRoundsTillNonPlayerCard = 5;
var roundsTillNonPlayerCard = Math.floor((Math.random() * maxRoundsTillNonPlayerCard) + 1);

var multiTurnsCardTracker = [];

var colorDefault = "#ffce73";
var colorNpCard = "#73ff88";
var colorEnds = "#c95164";

function start() {
    if(Cards.length !== 0){
        console.log(roundsTillNonPlayerCard);
        var endingCard = findFirstElementZero(multiTurnsCardTracker);
        if(endingCard !== null){
            setBackgroundColor(colorEnds);
            document.getElementById("Name").innerHTML = "This card ends now";
            document.getElementById("Runde").innerHTML = "";
            document.getElementById("Card").innerHTML = endingCard;
            $(".playerInfo").show();
        }else{
            decrement(multiTurnsCardTracker);
            if(roundsTillNonPlayerCard == 0){
                roundsTillNonPlayerCard = Math.floor((Math.random() * maxRoundsTillNonPlayerCard) + 1);
                pickCard(false);
            }else{
                pickCard(true);
                cycleThroughNames();
                roundsTillNonPlayerCard--;
            }
        }
    }else{
        setBackgroundColor(colorDefault);
        document.getElementById("Name").innerHTML = "This Game is over";
        document.getElementById("Runde").innerHTML = "Please leave feedback on our Github page"
        document.getElementById("Card").innerHTML = "";
        $(".playerInfo").show();
        $("#github").show();
        $(".reset").show()
    }
}

function pickCard(playerCard) {
  if(playerCard){
    setBackgroundColor(colorDefault);
    $(".playerInfo").show();
    var randomCard = Math.floor(Math.random() * Cards.length);
    var text = insertCustomText(Cards[randomCard][0]);
    Cards[randomCard][0] = text;
    document.getElementById("Card").innerHTML = text;
    multiTurnsCardTracker.push(Cards[randomCard]);
    if (Zuruecklegen != true) {
      Cards.splice(randomCard, 1); 
    }
  }else{
    setBackgroundColor(colorNpCard);
    var randomCard = Math.floor(Math.random() * npCards.length);
    var text = insertCustomText(npCards[randomCard][0]);
    npCards[randomCard][0] = text;
    document.getElementById("Card").innerHTML = text;
    multiTurnsCardTracker.push(npCards[randomCard]);
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

function findFirstElementZero(array) {
    var cache = null;
    for (var i = 0; i < array.length; i++) {
        if(array[i][1] === 0){
            cache = array[i][0];
            array.splice(i, 1);
            return cache;
        }else if(array[i][1] < 0){
            array.splice(i, 1);
        }
    }
    return cache;
}

function decrement(array) {
    for (var i = 0; i < array.length; i++) {
        array[i][1] = array[i][1] - 1;
    }
}