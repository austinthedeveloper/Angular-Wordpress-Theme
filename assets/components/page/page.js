angular.module('wpAngularTheme')
.component('page', {
	bindings: {
		'id': '@'
	},
	templateUrl: components + 'page/page.html',
	controller: ['Page', '$stateParams', function(Page, $stateParams) {
		var vm = this;
		
		vm.id = vm.id || $stateParams.slug || '';

		Page.get(vm.id)
		.then(function(res) {
			vm.post = res;
		}, function(err) {
			console.log(err);
		})
	}]
})