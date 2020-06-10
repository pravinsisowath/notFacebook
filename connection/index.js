const Sequelize = require("sequelize");

 const sequelize = new Sequelize(process.env.JAWSDBM_URL, 
    {
  dialect:  'mysql'
    });
module.exports = sequelize;
