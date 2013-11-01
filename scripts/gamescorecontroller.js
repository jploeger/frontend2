var App = App || {};

(function (exports){
	
	'use strict';

	var GameScoreController = {
		index: function() {

			qwest.post('https://api.leaguevine.com/v1/game_scores/', {
				access_token: '82996312dc'
			}).success(function ( data ) {

				App.Template.render('page-gamescore', data);

			});

		}
	};

	exports.GameScoreController = GameScoreController;

})(App);