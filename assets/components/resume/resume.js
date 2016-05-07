angular.module('wpAngularTheme')
.component('resume', {
	templateUrl: components + 'resume/resume.html',
	controller: ['Page', function(Page) {
		var vm = this;

		Page.get(9)
		.then(function(res) {
			vm.data = res;
		}, function(err) {
			console.log(err);
		})
	}]
})