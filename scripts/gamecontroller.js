var App = App || {};

(function (exports){
	
	'use strict';

	var GameController = {

		index: function(gameID) {

			qwest.get('https://api.leaguevine.com/v1/games/'+gameID+'/', {
				access_token: 'acfa228f8c'
			}).success(function ( data ) {

				App.Template.render('page-game', data);

			});

		},

		updateGame: function(gameID) {

			var	team1Score = document.getElementById('team1Score').value;
			var team2Score = document.getElementById('team2Score').value;
			var isFinal = document.getElementById('isFinal').value;

			var type = 'POST',
				url = 'https://api.leaguevine.com/v1/game_scores/',
				postData = JSON.stringify({
					game_id: gameID,
					team_1_score: team1Score,
					team_2_score: team2Score,
					is_final: isFinal
				});

			// Create request
			var xhr = new XMLHttpRequest();

			// Open request
			xhr.open(type, url, true);

			// Set request headers, including authorisation
			xhr.setRequestHeader('Content-type', 'application/json');
			xhr.setRequestHeader('Authorization', 'bearer a50e9433dd');

			// Send request
			xhr.send(postData);

			//	Re-render game page (server too slow to update from server after writing)
			//	App.GameController.renderGame(gameID);

			//	Update animation

			document.getElementById('body').classList.add("update");	

			window.setInterval( function(){

				document.getElementById('body').classList.remove("update");		

			}, 2000);

		}

	};

	exports.GameController = GameController;

})(App);