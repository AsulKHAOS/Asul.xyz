const mongoose = require("mongoose");

module.exports = mongoose.model("Plugin", new mongoose.Schema({
  name: String,
  description: String,
  commands: Array,
  systems: Array
}));
