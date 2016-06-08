angular.module('wpAngularTheme')
.service('Post',['$http', '$q', function($http, $q){
	var vm = this;
	var url = ajaxInfo.api_url + 'posts/';

	vm.get = get;

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

}])