const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER_NAME,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

module.exports = connection;