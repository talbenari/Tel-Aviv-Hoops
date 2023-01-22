const mongoose = require("mongoose");

const courtSchema = mongoose.Schema({
  players_capacity: { type: String, required: true },
  town: { type: String, required: true },
  Postdate: { type: String, required: true },
  name: { type: String, required: true },
  courtOwner: { type: String, required: true },
  address: { type: String, required: true },
  events: {
    id:{ type: Number, required: false },
    players: { type: Array, required: false },
    date: { type: String, required: false },
    numberOfPlayers: { type: Number, required: false },
  }


});

module.exports = mongoose.model("tlv_hoopsCourts", courtSchema);
