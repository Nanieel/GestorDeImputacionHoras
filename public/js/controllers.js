'use strict';

// Definiendo controladores para página 1
function Page1Ctrl($scope, $http, $location, $routeParams) {
}
function Page2Ctrl($scope, $http, $location, $routeParams) {
    console.log("controlador 2");
    
}
///////LOGIN//////

function LoginCtrl($scope, $http, $location, $routeParams) {
  console.log("controlador login");

  $scope.printScope= function(){
    console.log('printScope',$scope)
  }

  function getUsers(status,done){
  // Simple GET request example:
    $http.get('/users/'+status).then(function(response){
      //todo OK (llamamos a done, pasando null en el primer parametro, porque no hay erores, y response en el segundo parametro)
      done(null,response);
    },function(error){
      //hay errores (pasamos la descripcion del error en el primer parametro, no pasamos response porque ha sido erronea)
      done(error.data.description);
    })
  }

  function requestPass(data,done){
    // Simple POST request example:
      $http.post('/users',data).then(function(response){
        //todo OK (llamamos a done, pasando null en el primer parametro, porque no hay erores, y response en el segundo parametro)
        done(null,response);
      },function(error){
        //hay errores (pasamos la descripcion del error en el primer parametro, no pasamos response porque ha sido erronea)
        done(error.data.description);
      })
    }
    

  $scope.formularioIniciar = function(){
    getUsers('activos', function(error,response){
      if(error){
        console.log('error',error)
        return;
      } 
      console.log('imprimir en pantalla',response);
    })
    console.log('formularioIniciar llamada');
  }

  $scope.formularioSolicitud = function(){
    var usuario = {
      'nombre':$scope.nombre,
      'correo':$scope.correo
    }
    requestPass(usuario, function(error,response){
      if(error){
        console.log('datos erroneos',error)
        return;
      }
      console.log('respuesta',response)
    })
  }

/////////////Codigo Interfaz//////////////////////


  document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
  document.getElementById("btn__registrarse").addEventListener("click", register);
  window.addEventListener("resize", anchoPage);

  var formulario_login = document.querySelector(".formulario__login");
  var formulario_register = document.querySelector(".formulario__register");
  var contenedor_login_register = document.querySelector(".contenedor__login-register");
  var caja_trasera_login = document.querySelector(".caja__trasera-login");
  var caja_trasera_register = document.querySelector(".caja__trasera-register");


  function anchoPage(){
      if (window.innerWidth > 850){
          caja_trasera_register.style.display = "block";
          caja_trasera_login.style.display = "block";
      }else{
          caja_trasera_register.style.display = "block";
          caja_trasera_register.style.opacity = "1";
          caja_trasera_login.style.display = "none";
          formulario_login.style.display = "block";
          contenedor_login_register.style.left = "0px";
          formulario_register.style.display = "none";   
      }
  }
  anchoPage();
      function iniciarSesion(){
          if (window.innerWidth > 850){
              formulario_login.style.display = "block";
              contenedor_login_register.style.left = "10px";
              formulario_register.style.display = "none";
              caja_trasera_register.style.opacity = "1";
              caja_trasera_login.style.opacity = "0";
          }else{
              formulario_login.style.display = "block";
              contenedor_login_register.style.left = "0px";
              formulario_register.style.display = "none";
              caja_trasera_register.style.display = "block";
              caja_trasera_login.style.display = "none";
          }
      }
      function register(){
          if (window.innerWidth > 850){
              formulario_register.style.display = "block";
              contenedor_login_register.style.left = "410px";
              formulario_login.style.display = "none";
              caja_trasera_register.style.opacity = "0";
              caja_trasera_login.style.opacity = "1";
          }else{
              formulario_register.style.display = "block";
              contenedor_login_register.style.left = "0px";
              formulario_login.style.display = "none";
              caja_trasera_register.style.display = "none";
              caja_trasera_login.style.display = "block";
              caja_trasera_login.style.opacity = "1";
          }
  }
}
