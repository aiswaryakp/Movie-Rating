'use strict';

angular.module('movieApp',[
  'ngRoute',
  'movieList',
  'movieDetails',
  'movieLang',
  'navbar'
]);
// app.directive("navbar", function () {
//   return {
//     restrict: 'E',
//     templateUrl: 'shared/navbar.template.html'
//   };
// });