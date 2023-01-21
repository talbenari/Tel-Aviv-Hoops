const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: {type: String, default:"user" },
  birthDay: { type: String, required: true },
  town:{ type: String, required: true },
  height: { type: userSchema.js, required: true },
  rank: { type: String, required: true }
});

module.exports = mongoose.model("tlv_hoopsUsers", user_schema);
