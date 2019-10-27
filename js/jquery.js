$(document).ready(function(){

	$(".suppressAction").submit(function(){
    	$(".toBeGone").hide();
		$("#initPlayers").hide();
    	console.log("Member: ");
    	console.log($("#member"));

    	for (i = 1; i <= $('#member').val(); i++) 
		{
			Namen[i-1] = $("#player-" + i).val();
		}
		$("#NextButton").show();
		start();
		/* game has started -> click on screen for next card */
		$("body").click(function(){
			start();
			return false;
		}).css("cursor", "pointer"); // coco fix for ios
  	});
	
	$(".suppressAction").submit(function(){return false;}) // suppress default action (get request)
	
	$("#startForm").submit(function(){
		var container = $("#initPlayersContainer");
		var players = $("#member").val();
		
		// append a player name input field for each player
		for(var i = 1; i <= players; i ++)
		{
			container.append('<div class="form-group no-mb"><label for="player-' + i + '">Spieler/in ' + i + '</label><input type="text" class="form-control" id="player-' + i + '" required></div>')
		}
		$("#startForm").hide();
		$("#initPlayers").show();
		return false;
	});
});
