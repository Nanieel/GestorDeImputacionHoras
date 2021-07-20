// Definiendo controladores para página 1
//function LoginCtrl($scope, $http, $location, $routeParams) {
//    console.log("controlador login");
//
//    // Simple GET request example:
//$http({
//    method: 'GET',
//    url: '/users'
//  }).then(function successCallback(response) {
//      console.log('exito',response)
//      // this callback will be called asynchronously
//      // when the response is available
//    }, function errorCallback(response) {
//        console.log('error',response)
//      // called asynchronously if an error occurs
//      // or server returns response with an error status.
//    });
//    //Ejecutando funciones
//}
//


var app = angular.module( 'myApp' );

 app.controller('LoginCtrl',[ '$scope', '$http', function( $scope, $http ) {
    console.log("controlador login");
  
    // Simple GET request example:
  $http({
    method: 'GET',
    url: '/users'
  }).then(function successCallback(response) {
      console.log('exito',response)
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
        console.log('error',response)
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    //Ejecutando funciones

}]);
