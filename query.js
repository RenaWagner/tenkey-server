const { user, style, publicstyle } = require("./models");

async function usersWithStyles() {
  const users = await user.findAll({
    include: [{ model: style, attributes: ["imageUrl"] }],
  });
  return users.map((user) => user.get({ plain: true }));
}

// usersWithStyles().then((user) => console.log(user));

async function usersWithPublicstyleRatings() {
  const specificUser = await user.findByPk(1, {
    include: [{ model: publicstyle }],
  });
  return specificUser ? specificUser.get({ plain: true }) : "not found";
}

// usersWithPublicstyleRatings().then((user) => console.log(user));
