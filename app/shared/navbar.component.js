'use strict';

angular
  .module('navbar')
  .component('navbar', {
    templateUrl: 'shared/navbar.template.html',
    controller: ['$http','$scope',
      function navbarController($http, $scope) {
        // $scope.orderProp = 'name';
        // $http.get('movie-data/movies.json').then(function (response) {
        //   $scope.movies = response.data;
        // });
        $scope.myFunction = function () {
          var x = document.getElementById("nav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
        $scope.showSub = function () {
          document.getElementById("myDropdown").classList.toggle("show");
      }

      $scope.hide = function(){
        document.getElementById("myDropdown").classList.remove("show")

        document.getElementById("nav").classList.add("hideNav")
    }
      }
    ]
  });
