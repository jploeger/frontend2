var App = App || {};

(function (exports){
	
	'use strict';

	var ScheduleController = {
		index: function() {

			qwest.get('https://api.leaguevine.com/v1/games/', {
				tournament_id: 19389,
				access_token: '331a3c6ea7'
			}).success(function ( data ) {

				App.Template.render('page-schedule', data);

			});

		}
	};

	exports.ScheduleController = ScheduleController;

})(App);