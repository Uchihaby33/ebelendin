const reqEvent = event => require(`../guild/${event}`);
module.exports = client => {
  client.on("guildMemberAdd", reqEvent("guildMemberAdd"));
  client.on("guildMemberRemove", reqEvent("guildMemberRemove"));
};
