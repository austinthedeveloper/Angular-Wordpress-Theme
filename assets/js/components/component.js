angular.module('wpAngularTheme')
.component('component', {
	templateUrl: buildUrl + 'html/component.html',
	controller: ['_', 'githubService', 'stackService', '$q', function(_, githubService, stackService, $q) {
			var vm = this;
	
			vm.listClass = function(item) {
		      return 'fa-' + item;
		    };
		    
		    $q.all([githubService.getUser('austinthedeveloper'), stackService.getComments('2404112')])
		    .then(function(res) {
		      vm.data = _.flatten(res);
		    }, function(err) {
		      console.log('error', err);
		    });
		}]
})