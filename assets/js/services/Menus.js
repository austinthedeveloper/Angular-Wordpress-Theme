angular.module('wpAngularTheme')
.service('Menus',['$http', '$q', function($http, $q){
	var vm = this;
	var url = ajaxInfo.menu_api_url + 'menus/';
	// Angular Menu is ID: 19

	vm.get = get;

	function get(id) {
		var defer = $q.defer();
		id = id || '';

		$http.get(url + id)
		.then(function(res) {
			defer.resolve(res.data);
		}, function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

}])
