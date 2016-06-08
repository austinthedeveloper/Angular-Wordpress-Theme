angular.module('wpAngularTheme')
.service('Post',['$http', '$q', function($http, $q){
	var vm = this;
	var url = ajaxInfo.api_url + 'posts/';

	vm.get = get;
	vm.getAll = getAll;

	function get(slug) {
		var defer = $q.defer();
		var obj = {
			slug: slug
		};

		$http.get(url, {params: obj})
		.success(function(res) {
			defer.resolve(res[0]);
		}).error(function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

	function getAll() {
		var defer = $q.defer();

		$http.get(url, {cache: true})
		.success(function(res) {
			defer.resolve(res);
		}).error(function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

}])