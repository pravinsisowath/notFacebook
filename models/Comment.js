const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  { sequelize, modelName: "comment" }
);

module.exports = Comment;
