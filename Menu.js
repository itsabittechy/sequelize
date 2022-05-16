const { sequelize, DataTypes, Model } = require("./db");


class Menu extends Model {}

Menu.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
  }
);

module.exports = Menu;