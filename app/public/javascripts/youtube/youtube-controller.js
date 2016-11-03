angular.module('flapperNews')
.controller('YoutubeController', ['$scope', 'auth', 'youtubeVideos', '$sce', function($scope, auth, youtubeVideos, $sce) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.youtubeVideos = youtubeVideos;
  $scope.currentVideoIndex = 0;
  $scope.currentVideoId = $scope.youtubeVideos[0].id;

  $scope.playerVars = {
    controls: 0,
    autoplay: 0
  };

  $scope.playPreviousVideo = function() {
    if ($scope.currentVideoIndex === 0) {
      $scope.currentVideoIndex = $scope.youtubeVideos.length - 1;
    } else {
      $scope.currentVideoIndex -= 1;
    }
    $scope.currentVideoId = $scope.youtubeVideos[$scope.currentVideoIndex].id;
  };

  $scope.playNextVideo = function() {
    if ($scope.currentVideoIndex === $scope.youtubeVideos.length - 1) {
      $scope.currentVideoIndex = 0;
    } else {
      $scope.currentVideoIndex += 1;
    }
    $scope.currentVideoId = $scope.youtubeVideos[$scope.currentVideoIndex].id;
  };

  $scope.selectVideo = function(index, videoId) {
    $scope.currentVideoIndex = index;
    $scope.currentVideoId = videoId;
  };

  $scope.isCurrentVideo = function(videoId) {
    return $scope.currentVideoId === videoId;
  };

  $scope.$on('youtube.player.ready', function($event, player) {
    $scope.playVideo = function() {
      player.playVideo();
    };

    $scope.pauseVideo = function() {
      player.pauseVideo();
    };

    $scope.muteVideo = function() {
      player.mute();
    };

    $scope.unmuteVideo = function() {
      player.unMute();
    };
  });

  $scope.$on('youtube.player.ended', function($event, player) {
    $scope.playNextVideo();
  });

  $scope.getThumbnailUrl = function(videoId) {
    var url = 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg';
    return url;
  };
}]);
