$("#NextButton").hide();
$("#Button").hide();

$(document).ready(function(){

	$("#Button").click(function(){
    	$(".toBeGone").hide();
    	console.log("Member: ");
    	console.log($("#member"));

    	for (i = 1; i <= $('#member').val(); i++) {
  		elementId = "Name_" + i;
  		Namen[i-1] = $("#"+elementId).val();
		}
		$("#NextButton").show();
		start();
  	});

  	$("#NextButton").click(function(){
  		start();
  	});









});