//np == nonplayer

var Cards = [];
var npCards = [];
var cacheCards = [];
var cacheNpCards = [];

readCsv('csv/cards.csv', cacheCards);
readCsv('csv/npcards.csv',cacheNpCards);

function readCsv(file, array) {
	Papa.parse(file, {
		download: true,
		dynamicTyping: true,
		complete: function(results) {
			console.log(results);
			for (var i = 0; i < results.data.length; i++) {
				array.push(results.data[i]);
			}
		}
	});
}

function addToDeck(targetDeck, copyFromDeck, controlArray) {
	for (var i = 1; i < copyFromDeck.length; i++) {
		var addCounter = 0;
		for (var j = 2; j < copyFromDeck[i].length; j++){
			if(controlArray[j-2] === false && copyFromDeck[i][j] === true){

			}else{
				addCounter++;
			}
		}
		if(addCounter === copyFromDeck[i].length - 2){
			var cache = [copyFromDeck[i][0], copyFromDeck[i][1]];
			targetDeck.push(cache);
		}
	}
}

function insertCustomText(input) {
	input = input.replace(/RANDOMNUMBER/g, Math.floor(Math.random() * 10) + 1);
	return input;
}