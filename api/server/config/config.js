require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'admin',
    database: 'guard_rails',
    host: 'postgres',
    dialect: "postgres"
  },
  test: {
    username: 'postgres',
    password: 'admin',
    database: 'guard_rails',
    host: 'postgres',
    dialect: "postgres"
  },
  production: {
    username: 'postgres',
    password: 'admin',
    database: 'guard_rails',
    host: 'postgres',
    dialect: "postgres"
  }
}
