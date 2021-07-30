//const cons = require("consolidate");

function HorasCtrl($scope, $http, $location, $routeParams) {
  console.log("controlador horas");
  console.log("routeParams",$routeParams);

  $scope.data={}
  $scope.params={
    id:$routeParams.id
  }
  console.log("$scope",$scope)
  // Usuario logueado
  function getUser(done){
    $http.get('/horas/user?id=' + $scope.params.id ).then(function(response){
      done(null,response);
    },function(error){
      done(error.data.description)
    })
  }
  getUser(function(error,response){
    if(error){
      console.log('datos no encontrados ', error)
      return;
    }
    console.log('Datos',response)
    $scope.usuario = response.data;
  })
  // Proyect
  function getProyect(done){
   $http.get('/horas/proyect').then(function(response){
     done(null,response);
   },function(error){
     done(error.data.description)
   }) 
  }
  getProyect(function(error,response){
    if(error){
      console.log('No hay datos', error)
      return;
    }
    console.log('lista',response)
  })

  

}
