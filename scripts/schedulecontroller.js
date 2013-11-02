var App = App || {};

(function (exports){
	
	'use strict';

	var ScheduleController = {

		getPools: function() {

			qwest.get('https://api.leaguevine.com/v1/pools/', {
				tournament_id: 19389,
				access_token: '331a3c6ea7'
			}, {}, function () {

				//	Loading
				document.getElementById('body').classList.add("loading");				

			})
			.success(function ( data ) {

				App.Template.render('page-pools', data);

				//	Loading
				document.getElementById('body').classList.remove("loading");	

			});

		},

		getGames: function() {

			qwest.get('https://api.leaguevine.com/v1/games/', {
				tournament_id: 19389,
				access_token: '331a3c6ea7'
			}, {}, function () {

				//	Loading
				document.getElementById('body').classList.add("loading");				

			})
			.success(function ( data ) {

				App.Template.render('page-schedule', data);

				//	Loading
				document.getElementById('body').classList.remove("loading");	

			});

		}
	};

	exports.ScheduleController = ScheduleController;

})(App);