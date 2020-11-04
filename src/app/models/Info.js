import Sequelize, { Model } from 'sequelize';

class Info extends Model {
  static init(sequelize) {
    super.init(
      {
        cooler_name: Sequelize.STRING,
        battery_level: Sequelize.INTEGER,
        temperature: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Info;
