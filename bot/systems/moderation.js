async function ban(member, reason) {
  await member.ban({ reason });
}

async function kick(member, reason) {
  await member.kick(reason);
}

async function mute(member) {
  await member.timeout(10 * 60 * 1000);
}

module.exports = { ban, kick, mute };
