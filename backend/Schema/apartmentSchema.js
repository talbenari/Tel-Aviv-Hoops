const mongoose = require("mongoose");

const apartment_schema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  publisher: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array, required: false },
  city: { type: String, required: false },
  rooms: { type: String, required: false }, //
  kitchenSize: { type: String, required: false }, //
  houseSize: { type: String, required: false }, //
  description: { type: String, required: true },
  time: { type: String, required: false },
  checked: { type: Array, required: false },
  reviews: { type: Array, required: false },
});

module.exports = mongoose.model("apartment", apartment_schema);
// overwall: { type: Number, required: false },
// reviewer: { type: String, required: false },
// date: { type: String, required: false },
// freeText: { type: String, required: false },
// photos: { type: String, required: false },
// location: { type: Number, required: false },
// hosting: { type: Number, required: false },
// // size: { type: Number, required: false },
// clean: { type: Number, required: false },
// transport: { type: Number, required: false },
// price: { type: Number, required: false },
// yard: { type: Number, required: false },
