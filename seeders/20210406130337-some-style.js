"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "styles",
      [
        {
          comment:
            "I wore this with a winter jacket. It was too hot for a bike ride.",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/7c/01/79/7c0179a2b86cd9cdb3a801a18c46b82e.jpg",
          rating: 3,
          minTemp: 0,
          maxTemp: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "The clothes were perfect match for the weather!",
          wearingDate: "2021-03-31",
          imageUrl:
            "https://i.pinimg.com/564x/33/d1/83/33d1838893284e7e7d746529c877302d.jpg",
          rating: 3,
          minTemp: 5,
          maxTemp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Too cold for the weather!! Need to wear one more layer",
          wearingDate: "2020-09-28",
          imageUrl:
            "https://i.pinimg.com/564x/02/e9/c8/02e9c88f09f3e5209be06f86e23685a7.jpg",
          rating: 3,
          minTemp: 10,
          maxTemp: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Maybe a bit too hot for the weather.",
          wearingDate: "2020-06-15",
          imageUrl:
            "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1441521016000/photosp/0e276b0b-821c-4d94-a55b-2f65e7a11a83/stock-photo-men-male-summer-boys-italy-fashion-italian-boy-shoes-0e276b0b-821c-4d94-a55b-2f65e7a11a83.jpg",
          rating: 2,
          minTemp: 20,
          maxTemp: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Wore it on the date and loved it!",
          wearingDate: "2020-08-15",
          imageUrl:
            "https://i.pinimg.com/564x/91/e5/65/91e565b51dafe7ba901299a7d15690a1.jpg",
          rating: 5,
          minTemp: 25,
          maxTemp: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("styles", null, {});
  },
};
