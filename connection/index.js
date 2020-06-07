const Sequelize = require('sequelize')

// let sequelize


     const sequelize = new Sequelize(process.env.JAWSDB_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true //false
    });

// const sequelize = new Sequelize( process.env.JAWSDB_URL || process.env.LOCAL_URL )

module.exports = sequelize