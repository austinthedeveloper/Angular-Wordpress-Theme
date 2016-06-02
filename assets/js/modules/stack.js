angular.module('stackOverflow', ['underscore'])
  .factory('stackService',['$http', '$q', '_', function($http, $q, _) {
    var vm = this;

    var params = {
      site: "stackoverflow"
    };
    
    return {
      getUser: getUser,
      getBadges: getBadges,
      getComments: getComments
    };
    
    function getUser(user) {
      var delay = $q.defer();

      $http.get('https://api.stackexchange.com/2.2/users/' + user, {params: params})
        .success(function(data) {
          delay.resolve(data);
        });

      return delay.promise;
    }
    
    function getComments(user) {
      var delay = $q.defer();

      $http.get('https://api.stackexchange.com/2.2/users/' + user + '/comments', {params: params})
        .success(function(data) {
          data = data.items;
          data = _.map(data, function(item) {
            var message = function(reply) {
              var res = '';
              if(reply) {
                res = 'Replied to ' + reply.display_name;
              } else {
                res = 'Made a comment';
              }
              return res;
            };
            var obj = {
              source: 'stack-overflow',
              url: 'http://stackoverflow.com/questions/' + item.post_id,
              id: item.id,
              type: item.type,
              repo: item.repo,
              message: message(item.reply_to_user),
              date: sanitizeDate(item.creation_date)
            };
            return obj;
          });
          
          delay.resolve(data);
        });

      return delay.promise;
    }
    
    function getBadges(user) {
      var delay = $q.defer();

      params.order = "desc";
      params.sort = "rank";

      $http.get('https://api.stackexchange.com/2.2/users/' + user + '/badges', {params: params})
        .success(function(data) {
          delay.resolve(data);
        });

      return delay.promise;
    }
    
    function sanitizeDate(date){
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      return d.setUTCSeconds(date);
    }
  }]);