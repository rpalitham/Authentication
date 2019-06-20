const mongoose = require('mongoose')
const EventEmitter = require('events')

global.connectedEmitter = new EventEmitter()

global.db = mongoose.createConnection(
   "mongodb+srv://admin:admin@lazycluster0-pw9lh.mongodb.net/test?retryWrites=true&w=majority",
   {useNewUrlParser: true}
 );
db.on('connected', () => {
  console.log('DB CONNECTED');
  connectedEmitter.emit('dbConnected')
})
db.on('disconnected', () => {
  console.log('Error Connecting MongoDb');
  connectedEmitter.emit('dbConnectionError')
})
