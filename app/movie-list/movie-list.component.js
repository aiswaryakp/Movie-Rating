'use strict';

angular
  .module('movieList')
  .component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['$http', 'base', '$scope','$routeParams',
      function MovieListController($http, base, $scope, $routeParams) {
        $scope.orderProp = 'name';
        
        $scope.lang = $routeParams.lang
        if(!$scope.lang){
        $http({
          url: base.URL + '/listAll',
          method: 'GET'
        }).then(function (response) {
          $scope.movies = response.data;
        });
      }else{
        $http({
          url: base.URL + '/lang?param='+$scope.lang,
          method: 'GET'
        }).then(function (response) {
          $scope.movies = response.data;
        });
      }

        $scope.addToFav = function (movieId) {
          $scope.movieId = movieId;
          $http({
            url: base.URL + '/addToFav',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {'movieId': $scope.movieId}
          }).then(function (httpResponse) {
            alert(httpResponse.data.successmsg);
          });
        }
      }
    ]
  });

