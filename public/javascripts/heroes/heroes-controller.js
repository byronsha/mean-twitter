angular.module('flapperNews')
.controller('HeroesController', ['$scope', 'heroes', 'auth', function($scope, heroes, auth) {
  $scope.heroes = heroes;
  delete $scope.heroes[0];
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
