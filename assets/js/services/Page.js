angular.module('wpAngularTheme')
.service('Page',['$http', '$q', function($http, $q){
	var vm = this;
	var url = ajaxInfo.api_url + 'pages/';

	vm.get = function(id) {
		var defer = $q.defer();
		id = id || '';

		$http.get(url + id)
		.success(function(res) {
			defer.resolve(res);
		}).error(function(err) {
			defer.reject(err);
		});
		return defer.promise;
	};

}])