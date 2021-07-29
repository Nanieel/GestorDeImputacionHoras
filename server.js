// Importando dependencias

var express = require('express'); // Express js
var routes = require('./routes'); // Referenciando nuestra carpeta de rutas
var engines = require('consolidate'); // Sirve para compilar el html
var bodyparser = require('body-parser'); // Para que los response sean en json
var mysql = require('mysql'); // Conexion a la BBDD

// Invocamos la conexion a la BD
const connection = require('./database/db');
const { name } = require('ejs');
const { request, response } = require('express');

// Inicializamos el framework express

var app = express();

// Seteamos el puerto a 3000

app.set('port', (process.env.PORT || 3001));

// Definimos la carpeta de vistas

app.set('views', __dirname + '/public/views');

// Utilizamos la carpeta node_modules como librería estática

app.use(express.static(__dirname + '/node_modules/'));

// Utilizamos ejs para poder compilar el html

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Configuración para response en json
//app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json({extended: true}));

// La carpeta public como librería estática

app.use(express.static(__dirname + '/public'));

// Rutas

app.get('/', routes.index);

// Esto para acceder a los archivos html

app.get('/partials/:name', routes.partials);
app.get('/pages/:path/:name', routes.pages);


app.post('/users', requestPass);
app.post('/users/login', loginUP);
app.get('/horas/user', getUser);
app.get('/horas/proyect', getProyects);




function requestPass(request,response){
  console.log('body',request.body)
  const nombre = request.body.nombre;
  const correo = request.body.correo
  connection.query ('INSERT INTO users (email,password) VALUES (?,?)',[nombre,correo], async (error,results)=>{
    if(error){
      console.log(error);
      response.status(422).json({description:'fallo en el insert'})
    }else{
      response.status(201).json({description:'insert ok'})
    }
  })
}
//Funcion validar usuarios
function loginUP(request,response){
  console.log('body',request.body)
  const email = request.body.email;
  const pass = request.body.password
  connection.query('SELECT * FROM users WHERE email=? AND password=?',[email,pass], async (error,rows)=>{
    if(error){
      console.log(error);
      response.status(422).json({description:'Error de consulta'})
      return;
    }else{
      if(rows.length!=1){
        response.status(422).json({description:'No existes'})
        return;
      }
      console.log(rows);
      response.status(201).json({
        id:rows[0].id,
        name:rows[0].name,
        last_name:rows[0].last_name,
      })
      return;
    }
  })
}
// Sacar ususario logueado //
function getUser(request,response){
  console.log('user',request.query)
  const id = request.query.id;
  connection.query('SELECT * FROM users WHERE id=?',[id],async (error,rows)=>{
    if(error){
      console.log(error);
      response.status(422).json({description:'Error de consulta'})
      return;
    }
    console.log(rows);
    response.status(201).json({
    name:rows[0].name,
    last_name:rows[0].last_name,
    })
    return;

  })
}

// Sacar proyectos

function getProyects(request,response){
  console.log('list',reques.query)
}

// Redireccionar todo lo demás a index.
app.get('*', routes.index);

// Iniciar el server

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
