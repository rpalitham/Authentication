const express = require("express")
const mongoose = require('mongoose')
const morgan = require('morgan')
const routes = require("./api/routes")
const app = express()
const port = process.env.PORT || 3000

mongoose.connect(
   "mongodb+srv://admin:admin@lazycluster0-pw9lh.mongodb.net/test?retryWrites=true&w=majority",
   {useNewUrlParser: true},
   () => console.log("connected to db")
 );

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1', routes)
app.listen(port, () => console.log(`Connection Established!!! Server running  on ${port}`))
