const mongoose = require("mongoose");

module.exports = mongoose.model("Bot", new mongoose.Schema({
  token: String,
  clientId: String,
  guilds: [String],
  commands: Array,
  events: Array,
  economy: Object,
  moderation: Object
}));
