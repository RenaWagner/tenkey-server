const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const publicstyleRouter = require("./routers/publicstyle");
const userRouter = require("./routers/user");
const authMiddleware = require("./auth/middleware");

const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}
// Routes
app.use("/", authRouter);
app.use("/public", publicstyleRouter);
app.use("/user", authMiddleware, userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
