angular.module('wpAngularTheme')
.service('Post',['$http', '$q', '$stateParams', function($http, $q, $stateParams){
	var vm = this;
	var url = ajaxInfo.api_url + 'posts/';

	vm.get = get;
	vm.getAll = getAll;

	function get(slug) {
		var defer = $q.defer();
		var obj = {
			slug: slug || $stateParams.slug
		};

		$http.get(url, {params: obj, cache: true})
		.then(function(res) {
			defer.resolve(res.data[0]);
		}, function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

	function getAll() {
		var defer = $q.defer();

		$http.get(url, {cache: true})
		.then(function(res) {
			defer.resolve(res.data);
		}, function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

}])
