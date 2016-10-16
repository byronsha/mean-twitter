angular.module('flapperNews')
.controller('HeroesController', ['$scope', 'heroes', 'auth', function($scope, heroes, auth) {
  $scope.heroes = heroes.slice(1);
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
