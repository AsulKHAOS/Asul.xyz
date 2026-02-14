const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Bot = require("./models/Bot");
const { startBot } = require("../bot/botManager");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/discordSaaS");

app.post("/bot/create", async (req,res)=>{
  const bot = await Bot.create(req.body);
  await startBot(bot);
  res.json({status:"online"});
});

app.post("/bot/:id/command", async (req,res)=>{
  const bot = await Bot.findById(req.params.id);
  bot.commands.push(req.body);
  await bot.save();
  res.json({status:"command added"});
});

app.listen(3000, ()=>console.log("API rodando"));
