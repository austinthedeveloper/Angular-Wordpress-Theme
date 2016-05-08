angular.module('wpAngularTheme')
.component('page', {
	bindings: {
		'id': '@'
	},
	templateUrl: components + 'page/page.html',
	controller: ['Page', '$stateParams', 'Processing', function(Page, $stateParams, Processing) {
		var vm = this;
		
		vm.id = vm.id || $stateParams.slug || '';

		Processing.on();
		Page.get(vm.id)
		.then(function(res) {
			vm.post = res;
		}, function(err) {
			console.log(err);
		})
		.then(function() {
			Processing.off();
		});
	}]
})