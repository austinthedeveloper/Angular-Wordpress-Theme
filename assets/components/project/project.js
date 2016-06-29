angular.module('wpAngularTheme')
.component('project', {
	templateUrl: components + 'project/project.html',
	controller: ['ProjectService', 'Processing', 
	function(ProjectService, Processing){
		var vm = this;

		Processing.on();

		ProjectService.get()
		.then(
		function(res){
			vm.post = res;
			Processing.off();
		},
		function(err){
			console.log('error', err);
			Processing.off();
		});
		
	}]
})