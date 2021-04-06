const { user, style, publicstyleRating } = require("./models");

async function usersWithStyles() {
  const users = await user.findAll({
    include: [{ model: style, attributes: ["imageUrl"] }],
  });
  return users.map((user) => user.get({ plain: true }));
}

// usersWithStyles().then((user) => console.log(user));

async function usersWithPublicstyleRatings() {
  const user = await user.findByPk(1, {
    include: [{ model: publicstyleRating, attributes: ["rating"] }],
  });
  return user.map((user) => user.get({ plain: true }));
}

usersWithPublicstyleRatings().then((user) => console.log(user));
