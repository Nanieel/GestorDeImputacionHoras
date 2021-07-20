// Importando dependencias

var express = require('express'); // Express js
var routes = require('./routes'); // Referenciando nuestra carpeta de rutas
var engines = require('consolidate'); // Sirve para compilar el html
var bodyparser = require('body-parser'); // Para que los responses sean en json

// Inicializamos el framework express

var app = express();

// Seteamos el puerto a 3000

app.set('port', (process.env.PORT || 3001));

// Definimos la carpeta de vistas

app.set('views', __dirname + '/views');

// Utilizamos la carpeta node_modules como librería estática

app.use(express.static(__dirname + '/node_modules/'));

// Utilizamos ejs para poder compilar el html

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Configuración para response en json
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// La carpeta public como librería estática

app.use(express.static(__dirname + '/public'));

// Rutas

app.get('/', routes.index);

// Esto para acceder a los archivos html

app.get('/partials/:name', routes.partials);
app.get('/pages/:path/:name', routes.pages);


function getUsers(request,response){

  console.log('request users',request.params)
  //console.log('params',request.para)
  //response.status(200).json({users:[{name:'juli',password:'asdf'},{name:'dani',password:'qwer'}]})
  response.status(422).json({description:'no hay usuarios'})
  return;
}

app.get('/users/:status', getUsers);

// Redireccionar todo lo demás a index.
app.get('*', routes.index);

// Iniciar el server

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
