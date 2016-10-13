var app = angular.module('flapperNews', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/javascripts/home/home.ejs',
      controller: 'HomeController',
      resolve: {
        postPromise: ['posts', function(posts) {
          return posts.getAll();
        }]
      }
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/javascripts/posts/posts.ejs',
      controller: 'PostsController',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: '/javascripts/auth/login.ejs',
      controller: 'AuthController',
      onEnter: ['$state', 'auth', function($state, auth) {
        if (auth.isLoggedIn()) {
          $state.go('home');
        }
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: '/javascripts/auth/register.ejs',
      controller: 'AuthController',
      onEnter: ['$state', 'auth', function($state, auth) {
        if (auth.isLoggedIn()) {
          $state.go('home');
        }
      }]
    })
    .state('topLiveGames', {
      url: '/top-live-games',
      templateUrl: '/javascripts/top-live-games/top-live-games.ejs',
      controller: 'TopLiveGamesController',
      resolve: {
        topLiveGamesPromise: ['topLiveGames', function(topLiveGames) {
          return topLiveGames.getAll();
        }]
      }
    })
    .state('liveLeagueGames', {
      url: '/live-league-games',
      templateUrl: '/javascripts/live-league-games/live-league-games.ejs',
      controller: 'LiveLeagueGamesController',
      resolve: {
        liveLeagueGamesPromise: ['liveLeagueGames', function(liveLeagueGames) {
          return liveLeagueGames.getAll();
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}]);
