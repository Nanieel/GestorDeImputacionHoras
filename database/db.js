const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: process.env.DB_DATABASE
});

connection.connect((error)=>{
    if(error){
        console.log('El error de conexion es: ' +error);
        return;
    }
    console.log('!Conectado a las base de datos!');
});

module.exports = connection;