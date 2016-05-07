angular.module('wpAngularTheme')
.component('component', {
	templateUrl: buildUrl + 'html/component.html',
	controller: [function() {
			var vm = this;

			vm.url = buildUrl;
	
			/*vm.listClass = function(item) {
		      return 'fa-' + item;
		    };
		    
		    $q.all([githubService.getUser('austinthedeveloper'), stackService.getComments('2404112')])
		    .then(function(res) {
		      vm.data = _.flatten(res);
		    }, function(err) {
		      console.log('error', err);
		    });*/
		}]
})