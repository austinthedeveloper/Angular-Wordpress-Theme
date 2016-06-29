angular.module('wpAngularTheme')
.component('projects', {
	templateUrl: components + 'projects/projects.html',
	controller: ['$rootScope', 'ProjectService', 'Processing', function($rootScope, ProjectService, Processing){
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
			ProjectService.getAll().then(function(res){
				vm.projects = res;
				Processing.off();
			},
			function(err){
				vm.projects = [];
				console.log('Error:', err);
				Processing.off();
			});
		}

		vm.sortComment = function(comment) {
		    var date = new Date(comment.acf.project_date);
		    return date;
		};
		
	}]
})