const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize, DataTypes,Model} = require("./db");
const MenuItems = require("./MenuItems")

describe("MenuItems", () => {
  // Run this code...
  beforeAll(async () => {
    // This is what actually creates the tables
    // Based on the models
    await sequelize.sync({ force: true });
  });

  // ...Before each test
  test("Can create a menuitems", async () => {
    const menuitems = await MenuItems.create({
      name: "Brunch",
      price: 14
    });

    expect(menuitems.id).toBe(1);
    expect(menuitems.name).toBe("Brunch");
    expect(menuitems.price).toBe(14)
     
    
  });
});