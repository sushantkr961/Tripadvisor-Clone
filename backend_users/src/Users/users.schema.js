const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
    },
    photoURL: {
      type: String,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("user", usersSchema);
module.exports = User;
