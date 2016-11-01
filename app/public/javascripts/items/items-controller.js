angular.module('flapperNews')
.controller('ItemsController', ['$scope', 'items', 'auth', function($scope, items, auth) {
  $scope.items = items.slice(1);

  $scope.nonRecipeItems = $scope.items.filter(function(item) {
    return (!item.name.endsWith('_recipe'))
  });

  $scope.isLoggedIn = auth.isLoggedIn;
}]);
