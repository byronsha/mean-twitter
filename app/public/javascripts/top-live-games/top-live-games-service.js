angular.module('flapperNews')
.factory('topLiveGames', ['$http', 'auth', function($http, auth) {
  var o = {
    games: []
  };
  o.getAll = function() {
    return $http.get('/dota/topLiveGames').success(function(data) {
      angular.copy(data.game_list, o.games);
    });
  };

  return o;
}]);
