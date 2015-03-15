'use strict';

const pikucha = angular.module('pikucha', ['ngRoute', 'ngResource']);

pikucha.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/views/home/index.html'
    })
    .when('/pictures/:id', {
      controller: 'PicturesShowCtrl',
      templateUrl: '/views/pictures/show.html'
    })
    .when('/admin/pictures', {
      controller: 'AdminPicturesCtrl',
      templateUrl: '/views/admin/pictures/index.html'
    })
    .otherwise('/');
}]);
