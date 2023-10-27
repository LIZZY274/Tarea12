// conexión a la BD
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CafeConPan',
  database: 'carreras'
});

module.exports = connection;