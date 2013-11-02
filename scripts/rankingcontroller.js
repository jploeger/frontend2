var App = App || {};

(function (exports){
	
	'use strict';

	var RankingController = {
		index: function() {

			qwest.get('https://api.leaguevine.com/v1/pools/19219/', {

				access_token: 'acfa228f8c'

			}).success(function ( data ) {

				App.Template.render('page-ranking', data);
				
			});

		}
	};

	exports.RankingController = RankingController;

})(App);