const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    serverName: String,
    serverId: String,
    channelName: String,
    channelId: String,
    run: Boolean
});

const ServerLog = mongoose.model('ServerLog', schema);

module.exports = {ServerLog}