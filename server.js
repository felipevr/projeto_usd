const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//contem apenas a string de conexão com o https://cloud.mongodb.com
const connectionString = require('./connectionString');

mongoose.connect(connectionString, {
    useNewUrlParser: true
});

const app = express();

const Cotacao = require('./CotacaoSchema');

app.use(bodyParser.json());


app.get('/', (req, res) => {
    Cotacao.findOne().sort('-data').exec((err, cotacao) => {
        if (err) {
            return res.status(500).json({
                msg: "Não foi possível recuperar a cotação"
            });
        }
        return res.status(200).json({
            valor: cotacao.valor,
            data: cotacao.data
        })
        //console.log(err, res);
    });
    //return res.status(200).json('Olá mundo!');
});

app.listen(3030);

exports = module.exports = app