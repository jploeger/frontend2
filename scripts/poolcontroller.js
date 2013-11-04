var App = App || {};

(function (exports){
	
	'use strict';

	var PoolController = {

		index: function(poolId) {

			qwest.get('https://api.leaguevine.com/v1/games/', {
				pool_id: poolId,
				tournament_id: 19389,
				access_token: App.ACCESS_TOKEN
			}, {}, function () {

				App.startLoading();			

			})
			.success(function ( data ) {

				// Reverse list of results
				data.objects.reverse();

				App.Template.render('page-pool', data);

			})
			.complete(App.stopLoading);

		}

	};

	exports.PoolController = PoolController;

})(App);