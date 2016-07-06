angular.module('wpAngularTheme')
.service('CategoryService',['$http', '$q', '$stateParams', function($http, $q, $stateParams){
	var vm = this;
	var url = ajaxInfo.api_url + 'posts/';

	vm.getQuery = getQuery;

	function getQuery(slug) {
		var defer = $q.defer();
		var query = {
			'filter[category_name]': slug || $stateParams.slug || ''
		};

		$http.get(url, {params: query, cache: true})
		.success(function(res) {
			defer.resolve(res);
		}).error(function(err) {
			defer.reject(err);
		});
		return defer.promise;
	}

}])