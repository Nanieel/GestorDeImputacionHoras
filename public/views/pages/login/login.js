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
    // Login Usuario
    function loginUP(data,done){
      $http.post('/users/login',data).then(function(response){
        done(null,response);
      },function(error){
        done(error.data.description)
      })
    }

  $scope.formularioLogin = function(){
    var usuario = {
      'email':$scope.email,
      'password':$scope.password
    }
    loginUP(usuario,function(error,response){
      if(error){
        console.log('datos no encontrados ', error)
        //Fail Aler
        Swal.fire({
          title:'Error',
          text:'Usuario y/o password incorrectas',
          icon:'error',
          showConfirmButton:true,
          timer:false,
          ruta:''
        }).then(()=>{
          window.location='/login'
        });
        return;
      }
      var name = response.data.name;
      var last_name = response.data.last_name;
      //Correct Alert
        Swal.fire({
          title:'Welcome',
          text: name + ' ' + last_name,
          icon:'success',
          showConfirmButton:false,
          timer:2500,
          ruta:''
        }).then(()=>{
          if(name!='Admin'){
            window.location='/horas'
          }else{
          window.location='/admin'
        }
        });
      console.log('Datos',response)
    })
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
      //$scope.respuesta="Usuario registrado"
      console.log('respuesta',response)
      response.send('Usuario registrado')
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
