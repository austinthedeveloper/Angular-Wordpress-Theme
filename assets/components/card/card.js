angular.module('wpAngularTheme')
.component('card', {
	templateUrl: components + 'card/card.html',
	controller: [function() {
			var vm = this;

			vm.url = buildUrl;
		}]
})