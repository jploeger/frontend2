var App = App || {};

(function (exports){
	
	'use strict';

	var GameController = {

		index: function( gameId ) {

			App.startLoading();

			reqwest({

				url: 'https://api.leaguevine.com/v1/games/' + gameId + '/',
				type: 'json',
				data: {
					access_token: App.ACCESS_TOKEN
				}

			}).then(function ( data ) {

				App.Template.render('page-game', data);

			}).always(App.stopLoading);

		},

		updateGame: function( gameId ) {

			var	team1Score = document.getElementById('team1Score').value;
			var team2Score = document.getElementById('team2Score').value;
			var isFinal = document.getElementById('isFinal').value;

			App.startLoading();

			reqwest({

				url: 'https://api.leaguevine.com/v1/game_scores/',
				type: 'json',
				method: 'post',
				contentType: 'application/json',
				headers: {
					'Authorization': 'bearer a50e9433dd'
				},
				processData: false,
				data: JSON.stringify({
					game_id: gameId,
					team_1_score: team1Score,
					team_2_score: team2Score,
					is_final: isFinal
				})

			}).always(App.stopLoading);

		}

	};

	exports.GameController = GameController;

})(App);