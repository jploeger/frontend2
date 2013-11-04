var App = App || {};

(function (exports){
	
	'use strict';

	var PoolsController = {

		index: function() {

			App.startLoading();

			reqwest({

				url: 'https://api.leaguevine.com/v1/pools/',
				type: 'json',
				data: {
					tournament_id: App.TOURNAMENT_ID,
					access_token: App.ACCESS_TOKEN
				}
				
			}).then(function ( data ) {

				// Reverse list of results
				data.objects.reverse();

				App.Template.render('page-pools', data);

			}).always(App.stopLoading);

		}

	};

	exports.PoolsController = PoolsController;

})(App);