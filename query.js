const { user, style } = require("./models");

async function usersWithStyles() {
  const users = await user.findAll({
    include: [{ model: style, attributes: ["imageUrl"] }],
  });
  return users.map((user) => user.get({ plain: true }));
}

// usersWithStyles().then((user) => console.log(user));
