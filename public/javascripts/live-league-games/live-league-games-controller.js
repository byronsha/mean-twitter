angular.module('flapperNews')
.controller('LiveLeagueGamesController', ['$scope', 'liveLeagueGames', 'heroes', 'auth', function($scope, liveLeagueGames, heroes, auth) {
  $scope.liveLeagueGames = liveLeagueGames.games;
  $scope.heroes = heroes;
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
