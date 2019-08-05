const express = require('express');
const bodyParser = require('body-parser');
const scheduler = require('node-schedule');
const mongoose = require('mongoose');
const app = express();

//PUBLIC 
app.use(express.static('./public'))

//BODY PARSER
app.use(bodyParser.json());

//DB CONNECTION
//contem apenas a string de conexão com o https://cloud.mongodb.com
const connectionString = require('./src/connectionString');
mongoose.connect(connectionString, {
    useNewUrlParser: true
});

//ROUTERS
const apiRouter = require('./src/routers/ApiRouter');
app.use('/api', apiRouter);

//BOTS
const botBancoCentral = require('./src/bots/botBancoCentral');
scheduler.scheduleJob('0 1 * * *', botBancoCentral);

//LISTENER
app.listen(3030);

//exports = module.exports = app