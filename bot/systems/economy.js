const users = new Map();

function addMoney(userId, amount) {
  if (!users.has(userId)) users.set(userId, 0);
  users.set(userId, users.get(userId) + amount);
}

function getMoney(userId) {
  return users.get(userId) || 0;
}

module.exports = { addMoney, getMoney };
