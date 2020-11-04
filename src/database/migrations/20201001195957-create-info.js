const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('infos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cooler_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      battery_level: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      temperature: {
        allowNull: false,
        type: Sequelize.NUMBER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('infos');
  },
};
