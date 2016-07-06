angular.module('github', ['underscore'])
.service('githubService',['_', '$http', '$q', function(_, $http, $q) {
  var vm = this;
  vm.url = 'https://api.github.com/';

  return {
    getUser: getUser,
    getIssues: getIssues
  };

  function getUser(user) {
    var defer = $q.defer(),
        url = vm.url + 'users/' + user + '/events';

		$http.get(url).success(function(data){
		  // type": "PushEvent"
		  data = _.where(data, {type: 'PushEvent'});
		  data = _.map(data, function(item) {
		    var items = item.payload.size > 1 ? 'Items' : 'Item';
		    var obj = {
		      source: 'github',
		      id: item.id,
		      url: item.repo.url,
		      type: item.type,
		      repo: item.repo,
		      message: "Pushed " + item.payload.size + " " + items,
		      date: item.created_at
		    };
		    return obj;
		  });
			defer.resolve(data);
		}).error(function(e){
			console.log(e);
			defer.reject(e);
		});

		return defer.promise;
  }

  function getIssues(user, repository) {
    var defer = $q.defer(),
        url = vm.url + 'repos/' + user + '/' + repository + '/issues',
        params = {
        	state: 'all'
        };

		$http.get(url, {params: params}).success(function(data){
			defer.resolve(data);
		}).error(function(e){
			console.log(e);
			defer.reject(e);
		});

		return defer.promise;
  }
}]);
