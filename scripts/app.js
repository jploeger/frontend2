(function (exports) {

	'use strict';

	var App = {
		
		ACCESS_TOKEN: 'acfa228f8c',

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

		}

	};

	exports.App = App;

	window.addEventListener('DOMContentLoaded', function() {
		App.init();
	});

})(window);