const express = require('express');

const mongoose = require('mongoose');

//contem apenas a string de conexão com o https://cloud.mongodb.com
const connectionString = require('./connectionString');


console.log(connectionString);


mongoose.connect(connectionString, {
    useNewUrlParser: true
});




