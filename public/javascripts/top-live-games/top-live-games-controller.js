angular.module('flapperNews')
.controller('TopLiveGamesController', ['$scope', 'topLiveGames', 'auth', function($scope, topLiveGames, auth) {
  $scope.topLiveGames = topLiveGames.games;
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
