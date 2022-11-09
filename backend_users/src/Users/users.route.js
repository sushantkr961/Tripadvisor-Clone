const express = require("express");
const User = require("./users.schema");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  res.send("DONE OK");
});

userRouter.post("/", async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.send(user);
  } catch {
    res.status(404).send("ERROR");
  }
});

module.exports = userRouter;
