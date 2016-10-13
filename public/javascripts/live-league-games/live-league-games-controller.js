angular.module('flapperNews')
.controller('LiveLeagueGamesController', ['$scope', 'liveLeagueGames', 'auth', function($scope, liveLeagueGames, auth) {
  $scope.liveLeagueGames = liveLeagueGames.games;
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
