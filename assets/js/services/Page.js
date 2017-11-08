angular.module('wpAngularTheme')
.service('Page',['$http', '$q', function($http, $q){
	var vm = this;
	var url = ajaxInfo.api_url + 'pages/';

	vm.get = get;

	function get(id) {
		var defer = $q.defer();
		id = id || '';

		$http.get(url + id, {cache: true})
		.then(function(res) {
			defer.resolve(res.data);
		}, function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

}])
