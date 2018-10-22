'use strict';

angular.
  module('movieLang').
  component('movieLang', {
    templateUrl: 'movie-lang/movie-lang.template.html',
    controller: ['$http', '$routeParams',
      function movieLangController($http, $routeParams) {
        var self = this;
        self.lang = $routeParams.lang;
        self.orderProp = 'name';
        $http.get('/movie-data/movies.json').then( function(response){
          self.movies = response.data;   
        });
      }
    ]
  });
