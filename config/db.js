const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
    if(err){
        console.error('Error al conectar a la base de datos:', err)
        process.exit(1);
    }
    console.log('Conexion a MySQL exitosa.')
})

module.exports = db
