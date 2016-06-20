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
	    	return 'git-list-item github-' + status;
	    };

	    vm.statusIcon = function(status) {
	    	var res;
	    	switch(status) {
	    		case 'open':
	    			res = 'fa-warning';
	    			break;
	    		case 'closed':
	    			res = 'fa-check';
	    			break;
	    	}
	    	return res;
	    };

	}]
})