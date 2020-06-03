const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Comment extends Model { }

Comment.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postUuid: {
      type: DataTypes.UUID
    },
    userUuid: {
      type: DataTypes.UUID
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  { sequelize, modelName: "comment" }
);

module.exports = Comment
