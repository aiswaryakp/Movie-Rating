'use strict';
angular.
  module('movieDetails').
  component('movieDetails',{
    templateUrl: 'movie-details/movie-details.template.html',
    controller: ['$http', '$routeParams','$scope','base',
      function movieDetailsController($http, $routeParams, $scope, base) {

        $scope.setImage = function setImage(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        }
        
        $http({
          url: base.URL + '/details?param='+$routeParams.movieId,
          method: 'GET'
        }).then(function (response) {         
          $scope.movie = response.data[0];
          $scope.setImage($scope.movie.images[0]);
        });

      }
    ]
  });