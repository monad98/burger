const mysql = require('mysql2/promise');

module.exports = (async() => {
  const promiseConnection = await mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b4950e02dee864',
    password: '26390558',
    database: 'heroku_4f10a6637010781'
  });
  console.log("Connected to mysql as id " + promiseConnection.connection.threadId);
  return promiseConnection;
})();
