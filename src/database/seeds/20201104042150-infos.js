module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'infos',
      [
        {
          cooler_name: 'Track Cooler 1',
          battery_level: 85,
          temperature: 3.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('infos', null, {});
  },
};
