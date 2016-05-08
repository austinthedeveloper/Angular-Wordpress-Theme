angular.module('wpAngularTheme')
.component('main', {
	templateUrl: components + 'main/main.html',
	controller: ['Company', function(Company) {
		var vm = this;

		Company.get(60)
		.then(function(res) {
			vm.company = res;
		}, function(err) {
			console.log(err);
		});
	}]
})