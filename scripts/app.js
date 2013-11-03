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
				'/pools': function() {
					App.PoolsController.index();
				},
				'/pool/:id': function( poolId ) {
					App.PoolController.index(poolId);
				},
				'/game/:id': function( gameId ) {
					App.GameController.index(gameId);
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