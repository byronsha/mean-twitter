angular.module('flapperNews')
.controller('TwitchController', ['$scope', '$sce', 'auth', function($scope, $sce, auth) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentStream = $sce.trustAsResourceUrl('http://www.twitch.tv/Arteezy/embed');
  $scope.currentChat = $sce.trustAsResourceUrl('http://www.twitch.tv/Arteezy/chat');
  $scope.nextChannel = '';

  $scope.visitChannel = function() {
    if (!$scope.nextChannel || $scope.nextChannel === '') { return; }
    $scope.currentStream = $sce.trustAsResourceUrl('http://www.twitch.tv/' + $scope.nextChannel + '/embed');
    $scope.currentChat = $sce.trustAsResourceUrl('http://www.twitch.tv/' + $scope.nextChannel + '/chat');
    $scope.nextChannel = '';
  };
}]);
