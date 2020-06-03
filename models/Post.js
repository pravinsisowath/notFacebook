const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Post extends Model { }

Post.init({
    body: {
    type: DataTypes.STRING,
    allowNull: false
  },
   image: {
    type: DataTypes.BLOB('long') ,
    allowNull: true
  }
}, { sequelize, modelName: 'post' })

module.exports = Post