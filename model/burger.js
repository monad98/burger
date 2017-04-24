// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

module.exports = {
  selectAll: async() => await orm.selectAll("burgers"),

  insertOne: async(data) => {
    const response = await orm.insertOne("burgers", data);
    return response;
  },
  updateOne: async(data, condition) => {
    const response = await orm.updateOne("burgers", data, condition);
    return response;
  }
};
