angular.module('flapperNews')
.controller('HomeController', ['$scope', 'auth', function($scope, auth) {
  $scope.isLoggedIn = auth.isLoggedIn;
}]);
