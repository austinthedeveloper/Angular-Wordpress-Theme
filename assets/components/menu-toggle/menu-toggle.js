angular.module('wpAngularTheme')
.component('menuToggle', {
	templateUrl: components + 'menu-toggle/menu-toggle.html',
	controller: ['$mdSidenav', function($mdSidenav) {
		var vm = this;
		vm.toggle = function() {
			$mdSidenav('left').toggle();
		}
	}]
})