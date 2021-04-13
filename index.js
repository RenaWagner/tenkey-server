const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const loggerMiddleWare = require("morgan");

const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const publicstyleRouter = require("./routers/publicstyle");
const userRouter = require("./routers/user");
const authMiddleware = require("./auth/middleware");

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}
// Routes
app.use("/", authRouter);
app.use("/public", publicstyleRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
