(function (exports) {

	'use strict';

	var App = {
		
		ACCESS_TOKEN: 'acfa228f8c',
		TOURNAMENT_ID: 19389,

		init: function() {

			routie({
				'': function() {
					App.Template.render('page-home');
				},
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
				'/*': function() {
					App.Template.render('page-404');
				}
			});

			// Hook.js pull-to-refresh
			$('#body').hook({ reloadPage: true });

		},

		startLoading: function() {

			document.getElementById('body').classList.add('update');

		},

		stopLoading: function() {

			document.getElementById('body').classList.remove('update');

		}

	};

	exports.App = App;

	window.addEventListener('DOMContentLoaded', App.init);

})(window);