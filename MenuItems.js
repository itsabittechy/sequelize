const { sequelize, DataTypes, Model } = require("./db");

class MenuItems extends Model {}

MenuItems.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
  }
);

module.exports = MenuItems;