'use strict';

// Definiendo módulo con sus depedencias

angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives','ui.bootstrap']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // Definiendo rutas de frontend

  $routeProvider.
  when('/login', {
    templateUrl: 'pages/login/login',
    controller: LoginCtrl
  }).
  when('/admin', {
    templateUrl: 'pages/admin/admin',
    controller: AdminCtrl
  }).
  when('/horas/:id', {
    templateUrl: 'pages/horas/horas',
    controller: HorasCtrl
  }).
  when('/test', {
    templateUrl: 'pages/test/test',
    controller: TestCtrl
  }).
  otherwise({
    redirectTo: 'login' // Si es una página diferente, redirecciona a página 1
  });

  // html5mode true, para evitar el # en la url

  $locationProvider.html5Mode(true);
}]);