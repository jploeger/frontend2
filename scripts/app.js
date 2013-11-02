(function (exports) {

	'use strict';

	var App = {
		
		renderPage: function(title, body) {
			App.Template.render('page-general', {
				title: title,
				body: body
			});
		},

		init: function() {

			routie({
				'/schedule': function() {
					App.ScheduleController.getGames();
				},
				'/ranking': function() {
					App.RankingController.index();
				},
				'/': function() {
					App.renderPage();
				},
				'*': function() {
					App.renderPage('404!', 'This page has not been found.');
				}
			});

		}
	};

	exports.App = App;

	window.addEventListener('DOMContentLoaded', function() {
		App.init();
	});

})(window);