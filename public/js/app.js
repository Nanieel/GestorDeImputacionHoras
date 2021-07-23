'use strict';

// Definiendo módulo con sus depedencias

angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // Definiendo rutas de frontend

  $routeProvider.
  when('/page2', {
    templateUrl: 'pages/page2/page2',
    controller: Page2Ctrl
  }).
  when('/login', {
    templateUrl: 'pages/login/login',
    controller: LoginCtrl
  }).
  otherwise({
    redirectTo: 'login' // Si es una página diferente, redirecciona a página 1
  });

  // html5mode true, para evitar el # en la url

  $locationProvider.html5Mode(true);
}]);