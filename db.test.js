const { beforeAll, describe, test, expect } = require("@jest/globals");
const { sequelize, DataTypes,Model} = require("./db");
const Restaurant = require("./restaurant")

describe("Restaurant", () => {
  // Run this code...
  beforeAll(async () => {
    // This is what actually creates the tables
    // Based on the models
    await sequelize.sync({ force: true });
  });

  // ...Before each test
  test("Can create a restaurant", async () => {
    const restaurant = await Restaurant.create({
      name: "Garfunkeles",
      imageURL:
        "https://c8.alamy.com/comp/C2JWCE/garfunkels-restaurant-in-regent-street-london-in-the-evening-C2JWCE.jpg",
    });

    expect(restaurant.id).toBe(1);
    expect(restaurant.name).toBe("Garfunkeles");
    expect(restaurant.imageURL).toBe(
      "https://c8.alamy.com/comp/C2JWCE/garfunkels-restaurant-in-regent-street-london-in-the-evening-C2JWCE.jpg"
    );
  });
});

// describe("Menu", () => {});

// describe("Item", () => {});