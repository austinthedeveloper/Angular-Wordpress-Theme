angular.module('wpAngularTheme')
.component('single', {
	templateUrl: components + 'single/single.html',
	controller: ['$stateParams','Post', 'Processing', 
	function($stateParams, Post, Processing){
		var vm = this;
		vm.slug = $stateParams.slug;

		Processing.on();

		Post.get(vm.slug).then(function(res){
			vm.post = res;
			Processing.off();
		});
		
	}]
})