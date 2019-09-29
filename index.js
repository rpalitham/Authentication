global.appPath = __dirname
require('./Globals/Mongoose')

const express = require("express")
const cors = require("cors")
const morgan = require('morgan')
const routes = require("./routes")
const app = express()
const port = process.env.PORT || 3001

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/v1', routes)


connectedEmitter.on('dbConnected',() => {
  app.listen(port, () => console.log(`Connection Established!!! Server running  on ${port}`))
})
connectedEmitter.on('dbConnectionError',() => {
  console.log('Please check db creds and restart the app');
})
