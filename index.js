require('dotenv').config()
const mongoose = require('mongoose');

let {ServerLog} = require("./models/ServerLog.js");

main().catch(err => console.log(err.message));

async function main(){
  await mongoose.connect('mongodb://127.0.0.1/test').then(() => console.log('Connected!'));

  const serverlog = new ServerLog({
    serverName: 'Server STOCK 3',
    serverId: 'SERVER ID 3',
    channelName: 'Channel STOCK 3',
    channelId: 'CHANNEL ID 3',
    run: true
  });

  //await serverlog.save();

  const logs = await ServerLog.find({});
  //console.log(logs);

  const specificLog = await ServerLog.findOne({serverId: 'SERVER ID 2'});
  //console.log(specificLog != null ? 'Exists':'Does not Exist');

  let up = await ServerLog.findOneAndUpdate({serverName: 'Server STOCK 3'},{serverId: 'OMEGA', serverName:'BETTER SERVER!'},{new: true});
  console.log(up.serverId)
  console.log(up.serverName)

  console.log(logs);

}
