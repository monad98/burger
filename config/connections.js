const mysql = require('mysql2/promise');

module.exports = (async() => {
  const pool = await mysql.createPool({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    port: 3306,
    user: 'b4950e02dee864',
    password: '26390558',
    database: 'heroku_4f10a6637010781',
    connectionLimit: 5
  });
  console.log("Connection pool created!");
  return pool;
})();
