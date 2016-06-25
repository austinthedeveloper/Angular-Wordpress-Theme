angular.module('wpAngularTheme')
.component('blog', {
	templateUrl: components + 'blog/blog.html',
	controller: ['$rootScope', 'Post', 'Processing', function($rootScope, Post, Processing){
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