const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const dbName = 'Loja';
const dbUser = 'vendedor';
const dbPassword = 'vendedorloja123';
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql', // ou 'postgres', 'sqlite', etc.

  // Configurações adicionais (opcional)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;