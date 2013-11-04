var App = App || {};

(function (exports) {

	'use strict';

	var Template = {

		render: function( templateId, context ) {

			var source = document.getElementById(templateId).textContent,
			    template = Handlebars.compile(source),
			    html = template(context || {}),
			    content = document.getElementById('content');

			content.innerHTML = html;
		}

	};

	exports.Template = Template;

})(App);