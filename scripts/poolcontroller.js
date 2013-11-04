var App = App || {};

(function (exports){
	
	'use strict';

	var PoolController = {

		index: function( poolId ) {

			App.startLoading();

			reqwest({

				url: 'https://api.leaguevine.com/v1/games/',
				type: 'json',
				data: {
					pool_id: poolId,
					tournament_id: App.TOURNAMENT_ID,
					access_token: App.ACCESS_TOKEN
				}

			}).then(function ( data ) {

				// Reverse list of results
				data.objects.reverse();

				App.Template.render('page-pool', data);

			}).always(App.stopLoading);

		}

	};

	exports.PoolController = PoolController;

})(App);