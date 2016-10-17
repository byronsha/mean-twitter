angular.module('flapperNews')
.controller('LiveLeagueGamesController', ['$scope', 'liveLeagueGames', 'heroes', 'items', 'auth', '$filter', function($scope, liveLeagueGames, heroes, items, auth, $filter) {
  $scope.liveLeagueGames = liveLeagueGames.games;
  $scope.heroes = heroes;
  $scope.items = items;
  $scope.isLoggedIn = auth.isLoggedIn;

  $scope.getPlayerName = function(players, accountId) {
    return $filter('filter')(players, {account_id: accountId})[0].name;
  };

  $scope.getHeroName = function(heroId) {
    return $filter('filter')($scope.heroes, {id: heroId})[0].name;
  };

  $scope.getHeroImage = function(heroId) {
    return $filter('filter')($scope.heroes, {id: heroId})[0].image_url;
  };

  $scope.getItemImage = function(itemId) {
    return $filter('filter')($scope.items, {id: itemId})[0].image_url;
  };
}]);
