const { addMoney, getMoney } = require("../systems/economy");

module.exports = (client, botData) => {
  client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const cmd = botData.commands.find(c => c.name === interaction.commandName);
    if (!cmd) return;

    if (cmd.type === "reply")
      return interaction.reply(cmd.response);

    if (cmd.type === "balance")
      return interaction.reply("💰 " + getMoney(interaction.user.id));

    if (cmd.type === "work") {
      addMoney(interaction.user.id, 50);
      return interaction.reply("Você trabalhou e ganhou 50 moedas!");
    }
  });
};
