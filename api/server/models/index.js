import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
const basename = path.basename(__filename)
const env = 'development'
import dbConfig from '../config/config'
const db = {};

const sequelize = new Sequelize(dbConfig[env].database, dbConfig[env].username, dbConfig[env].password, dbConfig[env]);
sequelize.sync()
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
