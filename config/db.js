const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS || process.env.DB_PASSWORD || '', // Compatible por si usa DB_PASS o DB_PASSWORD
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3307, // <--- Aquí se fuerza o lee el puerto 3307
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize;
