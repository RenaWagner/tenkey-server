const { Router } = require("express");
const router = new Router();
const PublicStyle = require("../models").publicstyle;
const PublicStyleRating = require("../models").publicstyleRating;
const Style = require("../models").style;
const User = require("../models").user;

function calculateMinTemp(temp) {
  const temperature = parseInt(temp);
  let minTemp = 0;
  if (temperature <= 0) {
    minTemp = 0;
  } else if (temperature >= 26) {
    minTemp = 26;
  } else {
    minTemp = Math.floor(temperature / 5) * 5 + 1;
  }
  return minTemp;
}

function calculateMaxTemp(temp) {
  const temperature = parseInt(temp);
  let maxTemp = 0;
  if (temperature <= 0) {
    maxTemp = 0;
  } else if (temperature >= 26) {
    maxTemp = 50;
  } else {
    maxTemp = Math.floor(temperature / 5) * 5 + 5;
  }
  return maxTemp;
}

router.get("/public/:temp", async (req, res, next) => {
  try {
    const temp = req.params.temp;
    const sensitiveness = req.user.sensitiveness;
    const type = req.user.clothingType;

    let maxTemp = calculateMaxTemp(temp);
    let minTemp = calculateMinTemp(temp);

    if (sensitiveness === "heat") {
      if (maxTemp === 50) {
        minTemp = 26;
        maxTemp = 50;
      } else if (minTemp === 0) {
        minTemp = 1;
        maxTemp = 5;
      } else {
        minTemp = minTemp + 5;
        maxTemp = maxTemp + 5;
      }
    } else if (sensitiveness === "cold") {
      if (maxTemp === 50) {
        minTemp = 21;
        maxTemp = 25;
      } else {
        minTemp = minTemp - 5;
        maxTemp = maxTemp - 5;
      }
      if (maxTemp <= 0) {
        minTemp = 0;
        maxTemp = 0;
      }
    }

    const publicstylesWithRating = await PublicStyle.findAll({
      where: { minTemp: minTemp, maxTemp: maxTemp, clothingType: type },
      include: [
        {
          model: User,
          where: { id: req.user.id },
          attributes: ["id"],
          through: {
            attributes: ["rating"],
          },
        },
      ],
    });

    const publicstyles = await PublicStyle.findAll({
      where: { minTemp: minTemp, maxTemp: maxTemp, clothingType: type },
    });

    const publicstylesId = publicstylesWithRating.map((item) => {
      console.log("item", item.id);
      return item.id;
    });

    const publicstylesWithoutRating = publicstyles.filter((style) => {
      return !publicstylesId.includes(style.id);
    });

    const styleWithRating = [
      ...publicstylesWithoutRating,
      ...publicstylesWithRating,
    ];

    if (!styleWithRating) {
      return res.status(400).send({ message: "No public styles found" });
    }
    res.send(styleWithRating);
  } catch (e) {
    next(e);
  }
});

router.get("/original/:temp", async (req, res, next) => {
  try {
    const temp = req.params.temp;
    const maxTemp = calculateMaxTemp(temp);
    const minTemp = calculateMinTemp(temp);

    const originalStyles = await Style.findAll({
      where: { minTemp: minTemp, maxTemp: maxTemp },
    });
    if (!originalStyles) {
      return res.status(400).send({ message: "No original styles found" });
    }
    res.send(originalStyles);
  } catch (e) {
    next(e);
  }
});

router.post("/original", async (req, res, next) => {
  try {
    const { date, temp, comment, rating, imageUrl } = req.body;
    if (!date || !temp || !imageUrl) {
      return res.status(400).send({ message: "Please provide required info." });
    }

    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    const maxTemp = calculateMaxTemp(temp);
    const minTemp = calculateMinTemp(temp);

    const addNewStyle = await Style.create({
      comment: comment,
      wearingDate: date,
      imageUrl: imageUrl,
      rating: rating,
      minTemp: minTemp,
      maxTemp: maxTemp,
      userId: req.user.id,
    });
    res.send(addNewStyle);
  } catch (e) {
    next(e);
  }
});

router.patch("/original/:styleId", async (req, res, next) => {
  try {
    const { comment, rating } = req.body;
    const styleId = parseInt(req.params.styleId);

    const styleToUpdate = await Style.findByPk(styleId);
    if (!styleToUpdate) {
      return res.status(404).send({ message: "Style not found" });
    }

    await styleToUpdate.update({
      comment: comment,
      rating: rating,
    });
    return res.status(200).send({ styleToUpdate });
  } catch (e) {
    next(e);
  }
});

router.delete("/original/:styleId", async (req, res, next) => {
  try {
    const styleId = parseInt(req.params.styleId);

    const styleToDelete = await Style.findByPk(styleId);
    if (!styleToDelete) {
      return res.status(404).send({ message: "Style not found" });
    }
    const deleted = await styleToDelete.destroy();
    res.send(deleted);
  } catch (e) {
    next(e);
  }
});

router.patch("/public/:publicstyleId", async (req, res, next) => {
  try {
    const { rating } = req.body;
    const publicstyleId = parseInt(req.params.publicstyleId);
    if (!rating) {
      return res
        .status(404)
        .send({ message: "Please choose the rating to update" });
    }

    const publicstyleToUpdate = await PublicStyle.findByPk(publicstyleId);

    if (!publicstyleToUpdate) {
      return res.status(404).send({ message: "Style not found" });
    }

    const publicstyleToUpdateWithRating = await PublicStyle.findByPk(
      publicstyleId,
      {
        include: [
          {
            model: User,
            where: { id: req.user.id },
            attributes: ["id"],
            through: {
              attributes: ["rating"],
            },
          },
        ],
      }
    );

    if (!publicstyleToUpdateWithRating) {
      const addNewRating = await PublicStyleRating.create({
        userId: req.user.id,
        publicstyleId: publicstyleId,
        rating: parseInt(rating),
      });
    } else {
      const publicstyleRatingToUpdate = await PublicStyleRating.findOne({
        where: { publicstyleId: publicstyleId, userId: req.user.id },
      });
      await publicstyleRatingToUpdate.update({
        rating: parseInt(rating),
      });
    }

    const publicstyleUpdated = await PublicStyle.findByPk(publicstyleId, {
      include: [
        {
          model: User,
          where: { id: req.user.id },
          attributes: ["id"],
          through: {
            attributes: ["rating"],
          },
        },
      ],
    });
    return res.status(200).send({ publicstyleUpdated });
  } catch (e) {
    next(e);
  }
});

router.patch("/profile", async (req, res, next) => {
  try {
    const { clothingType, sensitiveness } = req.body;
    const userId = req.user.id;

    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      return res.status(404).send({ message: "User not found" });
    }

    await userToUpdate.update({
      clothingType: clothingType,
      sensitiveness: sensitiveness,
    });
    return res.status(200).send({ userToUpdate });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
