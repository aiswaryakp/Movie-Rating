'use strict';

angular
  .module('navbar')
  .component('navbar', {
    templateUrl: 'shared/navbar.template.html',
    controller: ['$http',
      function navbarController($http) {
        var self = this;
        // self.orderProp = 'name';
        // $http.get('movie-data/movies.json').then(function (response) {
        //   self.movies = response.data;
        // });
        self.myFunction = function () {
          var x = document.getElementById("nav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
        self.fun = function () {
          document.getElementById("myDropdown").classList.toggle("show");
      }

      self.hide = function(){
        document.getElementById("myDropdown").classList.remove("show")

        document.getElementById("nav").classList.add("hideNav")
    }
      }
    ]
  });
