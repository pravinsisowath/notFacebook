const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");

class Friendlist extends Model {}

Friendlist.init(
  {
    user1id: DataTypes.STRING,
    user2id: DataTypes.STRING,
  },
  { sequelize, modelName: "friendlist" }
);

module.exports = Friendlist;