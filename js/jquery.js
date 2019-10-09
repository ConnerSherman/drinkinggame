// $("#NextButton").hide(); // hide with css instead
// $("#Button").hide(); // hide with css instead

$(document).ready(function(){

	$("#Button").click(function(){
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
		})
  	});

  	/*$("#NextButton").click(function(){
  		start();
  	});
	*/
	
	$(".suppressAction").submit(function(){return false;}) // suppress default action (get request)
	
	$("#filldetails").click(function(){
		var container = $("#initPlayersContainer");
		var players = $("#member").val();
		
		// append a player name input field for each player
		for(var i = 1; i <= players; i ++)
		{
			container.append('<div class="form-group no-mb"><label for="player-' + i + '">Spieler ' + i + '</label><input type="text" class="form-control" id="player-' + i + '"></div>')
		}
		$("#startForm").hide();
		$("#Button").show();
	});
});