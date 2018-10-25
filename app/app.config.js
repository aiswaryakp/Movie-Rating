'use strict';

var app = angular.module('movieApp');
app.constant('base',
{ URL: 'http://10.4.6.45:8080' });  
app.config(['$locationProvider','$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/movies', {
          template: '<movie-list></movie-list>'
        }).
        when('/movies/:param', {
          template: '<movie-list></movie-list>'
        }).
        when('/movie-details/:movieId', {
          template: '<movie-details></movie-details>'
        }).
        otherwise('/movies');
    }
  ]);