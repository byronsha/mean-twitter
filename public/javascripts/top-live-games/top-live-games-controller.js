angular.module('flapperNews')
.controller('TopLiveGamesController', ['$scope', 'topLiveGames', 'heroes', 'auth', function($scope, topLiveGames, heroes, auth) {
  $scope.topLiveGames = topLiveGames.games;
  $scope.heroes = heroes;
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
