const registerSlash = require("../bot/registerSlash");

app.post("/bot/:id/command", async (req,res)=>{
  const bot = await Bot.findById(req.params.id);

  bot.commands.push({
    name: req.body.name,
    description: req.body.description,
    type: req.body.type || "reply",
    response: req.body.response
  });

  await bot.save();
  await registerSlash(bot);

  res.json({status:"command added & registered"});
});

  await bot.save();
  res.json({status:"command added"});
});

app.listen(3000, ()=>console.log("API rodando"));
