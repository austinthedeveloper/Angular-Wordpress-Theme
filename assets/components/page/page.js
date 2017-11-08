angular.module('wpAngularTheme')
.component('page', {
	bindings: {
		'id': '@'
	},
	templateUrl: components + 'page/page.html',
	controller: ['Page', '$state', '$stateParams', 'Processing', function(Page, $state, $stateParams, Processing) {
		var vm = this;		

		this.$onInit = function() {
	      vm.id = vm.id || $state.params.slug || $stateParams.slug || '';
	      getPage();
	    };

	    function getPage() {
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
	    }

		
	}]
})
