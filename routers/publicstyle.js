const { Router } = require("express");
const router = new Router();
const PublicStyle = require("../models").publicstyle;
const authMiddleware = require("../auth/middleware");

//without login
router.get("/:temp/", async (req, res, next) => {
  try {
    const temp = parseInt(req.params.temp);
    const minTemp = temp <= 0 ? 0 : Math.floor(temp / 5) * 5;
    const maxTemp = temp <= 0 ? 0 : (temp % 5) + temp;
    // console.log(minTemp);
    // console.log(maxTemp);
    const publicstyles = await PublicStyle.findAll({
      where: { minTemp: minTemp, maxTemp: maxTemp },
    });
    if (!publicstyles) {
      return res.status(400).send("No styles found");
    }
    res.send(publicstyles);
  } catch (e) {
    next(e);
  }
});

//with login
router.get("/user/:temp", authMiddleware, async (req, res, next) => {
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
    });
    if (!publicstyles) {
      return res.status(400).send("No styles found");
    }
    res.send(publicstyles);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
