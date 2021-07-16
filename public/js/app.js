'use strict';

// Definiendo módulo con sus depedencias

angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // Definiendo rutas de frontend

  $routeProvider.
  when('/page1', { // Definiendo la ruta
    templateUrl: 'partials/page1', //Definiendo el tempate
    controller: Page1Ctrl // Definiendo el controlador
  }).
  when('/page2', {
    templateUrl: 'partials/page2',
    controller: Page2Ctrl
  }).
  otherwise({
    redirectTo: '/page1' // Si es una página diferente, redirecciona a página 1
  });

  // html5mode true, para evitar el # en la url

  $locationProvider.html5Mode(true);
}]);