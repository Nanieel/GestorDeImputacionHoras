'use strict';
// Definiendo controladores para página 1
function Page1Ctrl($scope, $http, $location, $routeParams) {

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

function Page2Ctrl($scope, $http, $location, $routeParams) {
    console.log("controlador 2");
    
}

function LoginCtrl($scope, $http, $location, $routeParams) {
  console.log("controlador login");

  function getUsers(status,done){
  // Simple GET request example:
  $http({
    method: 'GET',
    url: '/users/'+status
  }).then(function successCallback(response) {
    done(null,response);
      // this callback will be called asynchronously
      // when the response is available

    }, function errorCallback(response) {
        done(response,null);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
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

}