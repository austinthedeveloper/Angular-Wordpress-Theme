angular.module('wpAngularTheme')
.component('main', {
	templateUrl: components + 'main/main.html',
	controller: ['Company', 'Processing', function(Company, Processing) {
		var vm = this;

		Processing.on();

		Company.get(60)
		.then(function(res) {
			vm.company = res;
		}, function(err) {
			console.log(err);
		})
		.then(function() {
			Processing.off();
		});
	}]
})