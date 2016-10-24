angular.module('flapperNews')
.controller('ArtController', ['$scope', 'dotaImages', 'auth', 'Lightbox', function($scope, dotaImages, auth, Lightbox) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.dotaImages = dotaImages;

  $scope.openLightboxModal = function(index) {
    Lightbox.openModal($scope.dotaImages, index);
  };
}]);
