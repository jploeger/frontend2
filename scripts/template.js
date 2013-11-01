var App = App || {};

(function (exports) {

	'use strict';

	var Template = {
		render: function(templateId, context){
			var source = document.getElementById(templateId).textContent;

			// Maak een functie aan om later uit te voeren
			var template = Handlebars.compile(source);
			
			// Voer functie uit met context als argument (data renderen)
			var html = template(context);

			// Element content uit de DOM
			var content = document.getElementById('content');
			content.innerHTML = html;
		}
	};

	exports.Template = Template;

})(App);