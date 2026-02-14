const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Bot = require("./models/Bot");
const Plugin = require("./models/Plugin");
const registerSlash = require("../bot/registerSlash");

const app = express();

app.use(cors());
app.use(express.json());

/* ============================= */
/* CONEXÃO MONGODB */
/* ============================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Erro Mongo:", err));

/* ===*
