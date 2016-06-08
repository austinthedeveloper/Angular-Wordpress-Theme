angular.module('wpAngularTheme')
.component('single', {
	templateUrl: components + 'single/single.html',
	controller: ['$stateParams','PostsBySlug', 'Processing', 
	function($stateParams, PostsBySlug, Processing){
		var vm = this;

		Processing.on();

		PostsBySlug.get($stateParams,function(res){
			vm.post = res.post;
			Processing.off();
		});
		
	}]
})