require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'guard_rails',
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'guard_rails',
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'guard_rails',
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  }
}
