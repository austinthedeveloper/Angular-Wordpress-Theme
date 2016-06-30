angular.module('wpAngularTheme')
.service('ProjectService',['$http', '$q', '$stateParams', function($http, $q, $stateParams){
	var vm = this;
	var url = ajaxInfo.api_url + 'projects/';

	vm.get = get;
	vm.getAll = getAll;

	function get(slug) {
		var defer = $q.defer();
		var obj = {
			slug: slug || $stateParams.slug
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

		$http.get(url, {
			cache: true, 
			params: {
				per_page: 100
			}
		})
		.success(function(res) {
			defer.resolve(res);
		}).error(function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

}])