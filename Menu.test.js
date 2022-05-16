const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize, DataTypes,Model} = require("./db");
const Menu = require("./Menu")

describe("Menu", () => {
  // Run this code...
  beforeAll(async () => {
    // This is what actually creates the tables
    // Based on the models
    await sequelize.sync({ force: true });
  });

  // ...Before each test
  test("Can create a menu", async () => {
    const menu = await Menu.create({
      title: "Garfunkeles",
    });

    expect(menu.id).toBe(1);
    expect(menu.title).toBe("Garfunkeles");

  });
});