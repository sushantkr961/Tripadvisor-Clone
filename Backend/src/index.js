require("dotenv").config();
const PORT = process.env.PORT;
const connect = require("../config/db");
const userRoute = require("./Users/users.route");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);


app.listen(PORT, async () => {
  try {
    await connect;
  } catch (err) {
    console.log(err);
  }
  console.log(`Server listening on port: ${PORT}`);
});
