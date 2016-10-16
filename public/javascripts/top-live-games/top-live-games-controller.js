angular.module('flapperNews')
.controller('TopLiveGamesController', ['$scope', 'topLiveGames', 'heroes', 'auth', '$filter', function($scope, topLiveGames, heroes, auth, $filter) {
  $scope.topLiveGames = topLiveGames.games;
  $scope.heroes = heroes;
  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.getHeroImage = function(heroId) {
    return $filter('filter')($scope.heroes, {id: heroId})[0].image_url;
  }
}]);
