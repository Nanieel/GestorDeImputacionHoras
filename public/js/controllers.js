'use strict';
// Definiendo controladores para página 1
function Page1Ctrl($scope, $http, $location, $routeParams) {
    console.log("controlador 1");

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
}

function Page2Ctrl($scope, $http, $location, $routeParams) {
    console.log("controlador 2");
}