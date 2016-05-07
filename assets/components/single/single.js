angular.module('wpAngularTheme')
.component('single', {
	templateUrl: components + 'single/single.html',
	controller: ['$stateParams','PostsBySlug','Comments',function($stateParams,PostsBySlug,Comments){
		var vm = this;

		PostsBySlug.get($stateParams,function(res){
			vm.post = res.post;
		});
		
	}]
})