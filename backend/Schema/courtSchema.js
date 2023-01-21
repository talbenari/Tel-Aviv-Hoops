const mongoose = require("mongoose");

const courtSchema = mongoose.Schema({
  players_capacity: { type: Array, required: true },
  town: { type: String, required: true },
  Postdate: { type: String, required: true },
  name: { type: String, required: true },
  courtOwner: { type: String, required: true },
  address: { type: String, required: true },
  events: {
    id:{ type: Number, required: true },
    players: { type: Array, required: true },
    date: { type: String, required: true },
    numberOfPlayers: { type: Number, required: true },


  }


});

module.exports = mongoose.model("tlv_hoopsCourts", courtSchema);
