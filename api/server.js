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
/* ============================= */
/* SERVIDOR */
/* ============================= */

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
