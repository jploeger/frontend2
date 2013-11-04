var App = App || {};

(function (exports){
	
	'use strict';

	var PoolController = {

		index: function(poolId) {

			qwest.get('https://api.leaguevine.com/v1/games/', {
				pool_id: poolId,
				tournament_id: 19389,
				access_token: '331a3c6ea7'
			}, {}, function () {

				document.getElementById('content').classList.add("loading");				

			})
			.success(function ( data ) {

				//	Reverse get results
				data.objects.reverse();

				App.Template.render('page-pool', data);

				document.getElementById('content').classList.remove("loading");	

			});

		}

	};

	exports.PoolController = PoolController;

})(App);