angular.module('wpAngularTheme')
.component('page', {
	templateUrl: components + 'page/page.html',
	controller: ['Page', '$stateParams', function(Page, $stateParams) {
		var vm = this;
		
		vm.id = $stateParams.slug || '';

		Page.get(vm.id)
		.then(function(res) {
			vm.data = res;
		}, function(err) {
			console.log(err);
		})
	}]
})