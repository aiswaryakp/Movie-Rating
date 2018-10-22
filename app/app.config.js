'use strict';

angular.
  module('movieApp').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/movies', {
          template: '<movie-list></movie-list>'
        }).
        when('/movies/:movieId', {
          template: '<movie-details></movie-details>'
        }).
        when('/movie-lang/:lang', {
          template: '<movie-lang></movie-lang>'
        }).
        otherwise('/movies');
    }
  ]);