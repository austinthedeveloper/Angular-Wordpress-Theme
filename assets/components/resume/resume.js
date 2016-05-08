angular.module('wpAngularTheme')
.component('resume', {
	templateUrl: components + 'resume/resume.html',
	controller: ['Page', 'Company', 'Processing', function(Page, Company, Processing) {
		var vm = this;

		Processing.on();

		Company.get()
		.then(function(res) {
			vm.companies = res;
		}, function(err) {
			console.log(err);
		})
		.then(function() {
			Processing.off();
		});
	}]
})