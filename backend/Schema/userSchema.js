const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, default: "reviewer" },
  approved_apartments: { type: Array, required: false },
  save_apartments: { type: Array, required: false },
});

module.exports = mongoose.model("apartNetUsers", user_schema);
