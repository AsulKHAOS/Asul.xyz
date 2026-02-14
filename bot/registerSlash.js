const { REST, Routes } = require("discord.js");

async function registerSlash(botData) {
  const rest = new REST({ version: "10" }).setToken(botData.token);

  const slashCommands = botData.commands.map(cmd => ({
    name: cmd.name,
    description: cmd.description || "Comando personalizado",
    options: cmd.options || []
  }));

  await rest.put(
    Routes.applicationCommands(botData.clientId),
    { body: slashCommands }
  );

  console.log("Slash commands registrados:", botData.clientId);
}

module.exports = registerSlash;
