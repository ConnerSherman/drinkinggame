var Zuruecklegen = false;

var Namen = [];
var NamenNichtSortiert = [];
var counter = 0;
var rounds = 1;

function removeimput(elementId) {
	baum = "Name_";
    for (i = 1; i < 11; i++) {
		l = i.toString();

  		elementID_Number = baum + l
  		var namenZwischenspeicher = document.getElementById(elementID_Number).value;
  		NamenNichtSortiert[i-1] = namenZwischenspeicher;
  		var element = document.getElementById(elementID_Number);

    	element.parentNode.removeChild(element);
	}
	var element = document.getElementById("Button");
    element.parentNode.removeChild(element);

    Namen = NamenNichtSortiert.filter(falscheNamenAussortieren);
    
  	var btn = document.createElement("BUTTON");
  	btn.innerHTML = "Next";
  	btn.id = "Next";
  	document.body.appendChild(btn);
  	document.getElementById("Next").onclick = function() {start()};

  	start();
}

function start() {
	pickCard();
	cycleThroughNames();
	
}


function pickCard() {
	var randomCard = Math.floor(Math.random() * Cards.length);
    document.getElementById("Card").innerHTML = Cards[randomCard];
    if (Zuruecklegen != true) {
    	Cards.splice(randomCard, 1); 
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

function falscheNamenAussortieren(value, index, array) {
	return value != "Namen hier einfügen";
}