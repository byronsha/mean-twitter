angular.module('flapperNews')
.controller('NavController', ['$scope', '$location', 'auth', function($scope, $location, auth) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;
  $scope.logOut = auth.logOut;

  $scope.isActive = function(route) {
    return route === $location.path();
  }
}]);
