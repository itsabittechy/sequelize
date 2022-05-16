const { Sequelize, DataTypes, Model } = require("sequelize")

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});



// const { sequelize, DataTypes, Model } = require("./db");

// class Restaurant extends Model { }

// Restaurant.init(
//     {
//         // Model attributes are defined here
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         imageURL: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     },
//     {
//         sequelize
//     }
// )



    // Menu.init(
    //     {
    //       // Model attributes are defined here
    //       name: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //       },
    //       imageURL: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //       }
    //     },
    //     {
    //         sequelize
    //     }
        
    //     )


    //       MenuItems.init(
    //         {
    //           // Model attributes are defined here
    //           name: {
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //           },
    //           imageURL: {
    //             type: DataTypes.STRING,
    //             allowNull: false,
    //           }})
module.exports = { sequelize, DataTypes, Model};