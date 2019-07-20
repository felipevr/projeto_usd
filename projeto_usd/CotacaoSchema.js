const mongoose = require('mongoose');

const cotacaoSchema = new mongoose.Schema({
    valor: {type: Number, required: true},
    data: {type: Date, required: true}
});

exports = module.exports = mongoose.model('Cotacao', cotacaoSchema); //, 'cotacaos'