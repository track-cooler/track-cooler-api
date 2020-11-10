module.exports = {
  dialect: 'sqlite',

  // config for sqlite
  operatorAliases: 'false',
  storage: 'src/database/track_cooler_db.sqlite',
  logging: false,

  // extra db config
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
