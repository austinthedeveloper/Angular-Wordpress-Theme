angular.module('wpAngularTheme')
.component('category', {
	templateUrl: components + 'category/category.html',
	controller: ['$rootScope', 'CategoryService', 'Processing', function($rootScope, CategoryService, Processing){
		var vm = this;

		vm.refreshPosts = refreshPosts;
		refreshPosts();

		vm.is_admin = $rootScope.is_admin;

		vm.search = '';
		vm.searchOptions = {
			debounce: { 'default': 500, 'blur': 0 }
		};

		function refreshPosts(){
			Processing.on();
			CategoryService.getQuery().then(
			function(res){
				vm.posts = res;
				Processing.off();
			},
			function(err){
				vm.posts = [];
				console.log('Error:', err);
				Processing.off();
			});
		}

	}]
})
