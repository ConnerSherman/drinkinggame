//np == nonplayer

var Cards = [];
var npCards = [];
var cacheCards = [];
var cacheNpCards = [];

readJson('cards/cards.json', cacheCards);
readJson('cards/npcards.json', cacheNpCards);

function readJson(file, array){
	$.getJSON(file, function(data) {
		array.push(...data);
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

function insertCustomText(input, name) {
	var namenCache = Namen.slice();
	if(name){
		namenCache.splice(namenCache.indexOf(currentName), 1);
	}
	while (input.search("RANDOMNUMBER") >= 0){
		input = input.replace("RANDOMNUMBER", Math.floor(Math.random() * 10) + 1);
	}
	while (input.search("RANDOMPLAYER") >= 0){
		if(namenCache.length >= 0) {
			var index = Math.floor(Math.random() * namenCache.length);
			input = input.replace("RANDOMPLAYER", namenCache[index]);
			namenCache.splice(index, 1);
		}else{
			input = input.replace("RANDOMPLAYER", "(You need more players for this card)")
		}
	}
	input = input.replace(/PLAYER/g, currentName);
	return input;
}