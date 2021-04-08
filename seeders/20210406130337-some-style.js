"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "styles",
      [
        {
          comment: "It was a bit too cold",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/8f/14/6a/8f146abd4ef43b547f5201396eaec476.jpg",
          rating: 3,
          minTemp: 0,
          maxTemp: 0,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "I wore this with a winter jacket. It was too hot for a bike ride.",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/7c/01/79/7c0179a2b86cd9cdb3a801a18c46b82e.jpg",
          rating: 3,
          minTemp: 1,
          maxTemp: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "It was perfect on the bike",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/25/cc/f4/25ccf4c7e905e64a2c4f631333f05737.jpg",
          rating: 3,
          minTemp: 6,
          maxTemp: 10,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "I wore this with a camel coat.",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/14/22/9c/14229c9fb37f2945f69f4b8b03375805.jpg",
          rating: 3,
          minTemp: 11,
          maxTemp: 15,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Perfect match!",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/9a/95/a3/9a95a3fff0f1b014592af5e9d5f4b73b.jpg",
          rating: 3,
          minTemp: 16,
          maxTemp: 20,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "A bit too hot with long pants.",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/86/52/2c/86522cca4aa033cf049f2a08798b52b3.jpg",
          rating: 3,
          minTemp: 21,
          maxTemp: 25,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Perfect!",
          wearingDate: "2021-01-31",
          imageUrl:
            "https://i.pinimg.com/564x/7e/08/b8/7e08b82262b4187929cd3d596285771f.jpg",
          rating: 3,
          minTemp: 26,
          maxTemp: 50,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "The clothes were perfect match for the weather!",
          wearingDate: "2021-03-31",
          imageUrl:
            "https://i.pinimg.com/564x/33/d1/83/33d1838893284e7e7d746529c877302d.jpg",
          rating: 3,
          minTemp: 6,
          maxTemp: 10,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Too cold for the weather!! Need to wear one more layer",
          wearingDate: "2020-09-28",
          imageUrl:
            "https://i.pinimg.com/564x/02/e9/c8/02e9c88f09f3e5209be06f86e23685a7.jpg",
          rating: 3,
          minTemp: 11,
          maxTemp: 15,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Maybe a bit too hot for the weather.",
          wearingDate: "2020-06-15",
          imageUrl:
            "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1441521016000/photosp/0e276b0b-821c-4d94-a55b-2f65e7a11a83/stock-photo-men-male-summer-boys-italy-fashion-italian-boy-shoes-0e276b0b-821c-4d94-a55b-2f65e7a11a83.jpg",
          rating: 2,
          minTemp: 16,
          maxTemp: 20,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Wore it on the date and loved it!",
          wearingDate: "2020-08-15",
          imageUrl:
            "https://i.pinimg.com/564x/91/e5/65/91e565b51dafe7ba901299a7d15690a1.jpg",
          rating: 5,
          minTemp: 21,
          maxTemp: 25,
          userId: 5,
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
