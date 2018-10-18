'use strict';

angular
  .module('movieList')
  .component('movieList',{
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['$http',
      function MovieListController($http){
        var self = this;
        self.orderProp = 'new';
        $http.get('movie-data/movies.json').then(function(response){
          self.movies = response.data;
        });
      }
    ]
  });



