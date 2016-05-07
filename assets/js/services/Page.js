angular.module('wpAngularTheme')
.service('Page',['$http', '$q', function($http, $q, $state){
	var vm = this;
	var url = 'http://localhost/wordpress/wp-json/wp/v2/pages/';

	vm.get = function(id) {
		var defer = $q.defer();

		$http.get(url + id)
		.success(function(res) {
			defer.resolve(res);
		}).error(function(err) {
			defer.reject(err);
		});
		return defer.promise;
	};
	
}])