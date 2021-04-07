const { Router } = require("express");
const router = new Router();
const PublicStyle = require("../models").publicstyle;
const Style = require("../models").style;
const User = require("../models").user;

function calculateMinTemp(temp) {
  const temperature = parseInt(temp);
  let minTemp = 0;
  if (temperature <= 0) {
    minTemp = 0;
  } else if (temperature >= 25) {
    minTemp = 25;
  } else {
    minTemp = Math.floor(temp / 5) * 5;
  }
}

function calculateMaxTemp(temp) {
  const temperature = parseInt(temp);
  let maxTemp = 0;
  if (temperature <= 0) {
    maxTemp = 0;
  } else if (temperature >= 25) {
    maxTemp = 50;
  } else {
  }
}

router.get("/public/:temp", async (req, res, next) => {
  try {
    const temp = parseInt(req.params.temp);
    console.log(req.user);
    const sensitiveness = req.user.sensitiveness;
    const type = req.user.clothingType;
    let minTemp = 0;
    let maxTemp = 0;

    if (sensitiveness === "heat") {
      minTemp = temp <= 0 ? 0 : Math.floor(temp / 5) * 5 - 5;
      maxTemp = temp <= 0 ? 0 : (temp % 5) + temp - 5;
    } else if (sensitiveness === "cold") {
      minTemp = temp <= 0 ? 0 : Math.floor(temp / 5) * 5 + 5;
      maxTemp = temp <= 0 ? 0 : (temp % 5) + temp + 5;
    } else {
      minTemp = temp <= 0 ? 0 : Math.floor(temp / 5) * 5;
      maxTemp = temp <= 0 ? 0 : (temp % 5) + temp;
    }

    const publicstyles = await PublicStyle.findAll({
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

    if (!publicstyles) {
      return res.status(400).send({ message: "No public styles found" });
    }
    res.send(publicstyles);
  } catch (e) {
    next(e);
  }
});

router.get("/original/:temp", async (req, res, next) => {
  try {
    const temp = parseInt(req.params.temp);
    const minTemp = temp <= 0 ? 0 : Math.floor(temp / 5) * 5;
    const maxTemp = temp <= 0 ? 0 : (temp % 5) + temp;

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
    const temperature = parseInt(temp);
    const minTemp = temperature <= 0 ? 0 : Math.floor(temperature / 5) * 5;
    const maxTemp = temperature <= 0 ? 0 : (temperature % 5) + temperature;

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
    const { date, temp, comment, rating } = req.body;
    const styleId = parseInt(req.params.styleId);

    const styleToUpdate = await Style.findByPk(styleId);
    if (!styleToUpdate) {
      return res.status(404).send({ message: "Style not found" });
    }

    const temperature = parseInt(temp);
    const minTemp = temperature <= 0 ? 0 : Math.floor(temperature / 5) * 5;
    const maxTemp = temperature <= 0 ? 0 : (temperature % 5) + temperature;

    await styleToUpdate.update({
      date: date,
      comment: comment,
      wearingDate: date,
      rating: rating,
      minTemp: minTemp,
      maxTemp: maxTemp,
    });
    return res.status(200).send({ styleToUpdate });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
