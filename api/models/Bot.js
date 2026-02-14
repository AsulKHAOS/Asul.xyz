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

{
  "name": "Economia Pro",
  "description": "Sistema completo de economia",
  "commands": [
    { "name": "balance", "description": "Ver saldo", "type": "balance" },
    { "name": "work", "description": "Trabalhar", "type": "work" }
  ]
}
