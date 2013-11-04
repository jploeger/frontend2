var App = App || {};

(function (exports){
	
	'use strict';

	var PoolsController = {

		index: function() {

			qwest.get('https://api.leaguevine.com/v1/pools/', {
				tournament_id: 19389,
				access_token: App.ACCESS_TOKEN
			}, {}, function () {

				App.startLoading();				

			})
			.success(function ( data ) {

				//	Reverse get results
				data.objects.reverse();

				App.Template.render('page-pools', data);

			})
			.complete(App.stopLoading);

		}

	};

	exports.PoolsController = PoolsController;

})(App);