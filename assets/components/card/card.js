angular.module('wpAngularTheme')
.component('card', {
	bindings: {
		'data': '='
	},
	templateUrl: components + 'card/card.html',
	controller: [function() {
			var vm = this;

			vm.url = buildUrl;
		}]
})
