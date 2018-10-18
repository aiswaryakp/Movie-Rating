'use strict';

angular.
  module('movieDetails').
  component('movieDetails',{
    templateUrl: 'movie-details/movie-details.template.html',
    controller: ['$http', '$routeParams',
      function movieDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        }

        $http.get('movie-data/' + $routeParams.movieId + '.json').then(function(response) {
          self.movie = response.data;
          self.setImage(self.movie.images[0]);
        });
      }
    ]
  });