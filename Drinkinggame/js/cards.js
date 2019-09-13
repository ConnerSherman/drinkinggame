var Cards = [];

var selectedDecks = [true, true];
var deckNames = ["copyedDeck", "cocoDeck"]


var copyedDeck = [
					"Drink", "Drink", "Drink", "Drink", "Drink", "Everyone must drink", "Everyone must drink", "Select two playes to drink", "Flip a coin. Heads, each player drinks once. Tails, you drink once for each other player.",
			 		"All female players must drink", "Drink a shot", " Everyone attempts to touch their toes (without bending their knees). Those who can't must drink once", "The person to have most recently had sex must drink", 
			 		"Choose any two players to arm wrestle. Loser drinks once", "Drink twice for each female player", "A player of your choosing must drink twice; players sitting to his left and right must each drink once",
					"A player of your choice must run 3 laps around the room", 
			 		"The tallest and shortest players must each toast to their freakish heights and drink", "Everyone must hold their breath. The first player to give up must drink twice", "Loudly moan with pleasure",
			 		"Whoever has the most piercings must drink", "Pick a player to play rock-paper-scissors with. Loser drinks once. For each tie, everyone except you must drink", 
			 		"Do push-ups. For each 10 push-ups you do, everyone other than you must drink. When you're finished, you must drink", "Choose a player. He must drink a shot using only his mouth. If he spills any, he must take a drink", 
			 		"Choose two players. Designate player A to do a body shot off player B", "Pick a player. He must stick his arms out and stand on one foot with one eye closed for 10 seconds. If he fails, he must drink. If he succeeds, everyone else drinks twice",
			 		"Everyone stands upright. You spin around once and drink once; the player to your left twice and drinks twice; the next player 3 spins + 3 drinks, and so on", "Any player whose legs are crossed must drink", 
					"Each player takes a shot, trades seats with another player, trades shirts with a different player, and shouts an inspiring war cry", 
			 		"Choose a player and try to guess their underwear color. If this color appears anywhere on their underwear, they drink twice; otherwise, you drink once", 
			 		"Choose a player. He must take a shot, then fall off his chair", "Select a player he/she must lift a player of their choice onto their shoulders. If they can't keep it up for 15 seconds, they must each drink. Otherwise, all other players must drink",
			 		"Any players who believe in God must drink", " Everyone must quickly strike the Captain Morgen pose. Last one to captain must drink", "Each turn, you choose someone to drink once. Ends after 4 full rounds",
			 		"This player drinks double the normally required amount for the next 2 full rounds", "Each time you drink all other playes must drink. Ends after 3 full rounds",
			 		"Each time you drink, each other player must touch his thumb to a flat surface. The last to do so must drink. Ends after 5 rounds", "You must drink each time your turn is for 5 full rounds", 
			 		"You must play with your dominant arm behind your back. If you use it you drink. Ends after 3 full rounds", "You must move, talk and drink in slow-motion for the next 3 full rounds", "Select two players. Theys must each drink twice, then high-five", 
			 		"You choose a nickname. Anyone caught referring to you by your real name must drink", "Waterfall", "Question Master", "Blonde players must drink. Blue-eyed players must drink. Both? Drink three times", 
			 		"Select a player to flip a coin until he gets two 'heads' in a row. For each 'tails', he must drink", "You must walk around in a silly manner. Everyone else drinks", "All smokers must drink. Anyone currently smoking must drink three times", 
			 		"You have 5 seconds to draw a spider with a smiley and the correct amound of legs. If you succeed, everyone else must drink; if you fail you must drink once for each other player", 
			 		"All single players must drink", "Youngest player sits on oldest player's lap for one round", "Choose a player. Up to 3 others may each put an ice cube into this player's clothing", "Everyone spanks you", 
			 		"Select two players to have a stairing contest. Loser drinks twice", "Choose a player to make out with/hump a poster, object, or wall for at least 15 seconds", 
			 		"Everyone with glasses must drink twice (once for each eye). Those wearing contacts must drink four times (for hiding their eyeball failure)", "The last player who went to the bathroom must drink halfe of what's in their glass", 
			 		"You must balance a coin on your nose. Anytime it falls of, must drink. Ends after 3 full turns", "Choose two players to dance sensually and slowly to any song", "The player with the biggest boobs must drink twice. Anyone with fake tits must take a shot", 
			 		"You must drink twice for each male player", "Whoever's birthday is soonest must drink once for each remaining month. If it is someone's birthday they drink a shot", "If anyone has ever walked in on you while masturbating or during any sexual act, drink", 
			 		"Each player drinks once for each continent they have been to. If they've been to six, they drink a shot", "You may not call anyone by their real name if you do drink", 
			 		"Each player drinks once for each language they speak. If they only speak one language, they must drink a shot", "Choose a player to try to toss something into a glass 2m away. If they make it, everyone drinks. If they miss, they drink once for each other player", 
			 		"Each player drinks once for each time he or she has masturbated in the past week, and takes a shot for each time he or she had sex in the past week", "Anyone with more than 15 euros in their wallet must drink", 
			 		"Any players born in the current country must drink. Foreigners high five each other", "Anyone who cannot present a condom must drink", "Any player who has used any sort of toy, sexually, must drink"

			 	];


var cocoDeck = [
				"Wer würde am ehesten unter der Brücke landen? Alle stimmen gleichzeit ab wer die meisten Stimmen bekommt tringt. Credit:Coco"

			]


for (var i = deckNames.length - 1; i >= 0; i--) {
	if (selectedDecks[i] == true) {
		m = deckNames[i];

		var Cards = Cards.concat(eval(m));

	}
}