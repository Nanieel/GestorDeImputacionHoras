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
/// Cal
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 200 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/200',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
  

}
