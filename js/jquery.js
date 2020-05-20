$(document).ready(function(){

	$(".suppressAction").submit(function(){
		$("#initPlayers").hide();
    	console.log("Member: ");
    	console.log($("#member"));

    	for (i = 1; i <= $('#member').val(); i++) 
		{
			Namen[i-1] = $("#player-" + i).val();
		}

		var container = $("#checkboxeContainer");

		for (var i = 2; i < cacheCards[0].length; i++) {
			container.append('<div class="form-check"><input type="checkbox" class="form-check-input" value="" id="' + cacheCards[0][i].replace(/ /g, "") + '" checked><label class="form-check-label" for="' + cacheCards[0][i].replace(/ /g, "") + '">' + cacheCards[0][i] + '</label></div>')
		}

		$("#decks").show();
  	});
	
	$(".suppressAction").submit(function(){return false;}) // suppress default action (get request)
	
	$("#startForm").submit(function(){
		var container = $("#initPlayersContainer");
		var players = $("#member").val();
		
		// append a player name input field for each player
		for(var i = 1; i <= players; i ++)
		{
			container.append('<div class="form-group no-mb"><label for="player-' + i + '">Player ' + i + '</label><input type="text" class="form-control" id="player-' + i + '" required></div>')
		}
		$("#startForm").hide();
		$("#initPlayers").show();
		return false;
	});

	$(".checkboxes").submit(function () {
		$(".toBeGone").hide();
		$("#decks").hide();

		for (var i = 2; i < cacheCards[0].length; i++)
		{
			controlArray[i-2] = $("#" + cacheCards[0][i].replace(/ /g, "")).is(':checked');
		}

		addToDeck(Cards, cacheCards, controlArray);
		addToDeck(npCards, cacheNpCards, controlArray);

		$("#NextButton").show();
		start();
		/* game has started -> click on screen for next card */
		$("body").click(function(){
			start();
			return false;
		}).css("cursor", "pointer"); // coco fix for ios
	});

	$(".checkboxes").submit(function(){return false;}) // suppress default action (get request)
});
