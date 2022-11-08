require("dotenv").config();
const PORT = process.env.PORT;
// let bodyParser = require("body-parser");
// let urlEncoder = bodyParser.urlencoded();

const User = require("./Users/users.schema");
const connect = require("../config/db");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// User.find({}, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

app.get("/users", async (req, res) => {
  //     User.find().then(data=>{
  //     res.json(data)
  //   });
  // console.log(users)
  //   User.find({}, (err, result) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  //   console.log(users);

  res.send("DONE OK");
});

app.post("/users", async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.send(user);
  } catch {
    res.status(404).send("ERROR");
  }
});
// app.post("/users/su", (req, res) => {});

app.listen(PORT, async () => {
  try {
    await connect;
  } catch (err) {
    console.log(err);
  }
  console.log(`Server listening on port: ${PORT}`);
});
