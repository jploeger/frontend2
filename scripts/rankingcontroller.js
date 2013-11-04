var App = App || {};

(function (exports){
	
	'use strict';

	var RankingController = {

		index: function() {

			qwest.get('https://api.leaguevine.com/v1/pools/', {
				tournament_id: 19389,
				access_token: '331a3c6ea7'
			}, {}, function () {

				document.getElementById('body').classList.add("loading");				

			})
			.success(function (data){

				data.objects.reverse();

				App.Template.render('page-ranking', data);

				document.getElementById('body').classList.remove("loading");	

			});

		}
	};

	exports.RankingController = RankingController;

})(App);