angular.module('wpAngularTheme')
.component('preCode', {
	bindings: {
		data: '='
	},
	templateUrl: components + 'pre-code/pre-code.html',
	controller: [function() {
		var vm = this;

		vm.isAdmin = ajaxInfo.is_admin;
	}]
})
