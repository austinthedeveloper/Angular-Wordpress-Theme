angular.module('wpAngularTheme')
.component('list', {
	templateUrl: components + 'list/list.html',
	controller: ['$rootScope', 'Post', 'Processing', function($rootScope, Post, Processing){
		var vm = this;

		vm.refreshPosts = refreshPosts;
		refreshPosts();

		vm.is_admin = $rootScope.is_admin;

		function refreshPosts(){
			Processing.on();
			Post.getAll().then(function(res){
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