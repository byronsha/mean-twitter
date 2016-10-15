angular.module('flapperNews')
.factory('liveLeagueGames', ['$http', 'auth', function($http, auth) {
  var o = {
    games: []
  };
  o.getAll = function() {
    return $http.get('/dota/liveLeagueGames').success(function(data) {
      angular.copy(data.games, o.games);
    });
  };

  return o;
}]);
