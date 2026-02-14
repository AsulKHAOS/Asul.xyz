const { Client, GatewayIntentBits } = require("discord.js");

const bots = new Map();

async function startBot(botData) {
  if (bots.has(botData.clientId)) {
    bots.get(botData.clientId).destroy();
  }

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent
    ]
  });

  client.once("ready", () => {
    console.log("Bot online:", client.user.tag);
  });

  require("./handlers/interactionHandler")(client, botData);
  require("./handlers/eventHandler")(client, botData);

  await client.login(botData.token);

  bots.set(botData.clientId, client);
}

module.exports = { startBot, bots };
const registerSlash = require("./registerSlash");

