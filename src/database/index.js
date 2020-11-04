import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

// models
import Info from '../app/models/Info';

const models = [Info];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach((model) => {
      return model.init(this.connection);
    });

    models.forEach((model) => {
      return model.associate && model.associate(this.connection.models);
    });
  }
}

export default new Database();
