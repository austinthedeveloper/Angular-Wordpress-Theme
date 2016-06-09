angular.module('wpAngularTheme')
.component('githubIssues', {
	templateUrl: components + 'github-issues/github-issues.html',
	controller: ['githubService', function(githubService){
		var vm = this;

		githubService.getIssues('austinthedeveloper', 'Angular-Wordpress-Theme')
	    .then(function(res) {
	      vm.issues = res;
	    }, function(err) {
	      console.log('error', err);
	    });

	    vm.status = function(status) {
	    	return 'github-' + status;
	    };

	    vm.properStatus = function(status) {

	    };

	}]
})