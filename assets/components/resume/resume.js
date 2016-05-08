angular.module('wpAngularTheme')
.component('resume', {
	templateUrl: components + 'resume/resume.html',
	controller: ['Page', 'Company', function(Page, Company) {
		var vm = this;

		Page.get(9)
		.then(function(res) {
			vm.data = res;
		}, function(err) {
			console.log(err);
		});

		Company.get()
		.then(function(res) {
			vm.companies = res;
		}, function(err) {
			console.log(err);
		});
	}]
})