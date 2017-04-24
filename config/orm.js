// Import MySQL connection promise.
var connPromise = require("./connections");

module.exports = {
  selectAll: async(tableInput) => 
    (await (await connPromise).execute(`SELECT * FROM ${tableInput}`))[0],
  insertOne: async(table, data) => 
    await (await connPromise).query(`INSERT INTO ${table} SET ?`, data),
  updateOne: async(table, data, condition) => 
    await (await connPromise).query(`UPDATE ${table} SET ? WHERE ?`, [data, condition])
};
