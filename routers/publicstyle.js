const { Router } = require("express");
const router = new Router();
const PublicStyle = require("../models").publicstyle;
const authMiddleware = require("../auth/middleware");

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
//without login
router.get("/:temp/", async (req, res, next) => {
  try {
    const temp = req.params.temp;
    const minTemp = calculateMinTemp(temp);
    const maxTemp = calculateMaxTemp(temp);

    const publicstyles = await PublicStyle.findAll({
      where: { minTemp: minTemp, maxTemp: maxTemp },
    });
    if (!publicstyles) {
      return res.status(400).send({ message: "No styles found" });
    }
    res.send(publicstyles);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
