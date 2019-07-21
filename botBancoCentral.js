const axios = require('axios');
const moment = require('moment');

const Cotacao = require('./CotacaoSchema');
const dbURL = require('./connectionString');


const mongoose = require('mongoose');
mongoose.connect(dbURL, {
    useNewUrlParser: true
});

const consultar = async () => {
        
    let data = moment().format('MM-DD-YYYY'); //'05-08-2019';
    const endpoint = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json`;

    try {
        const response = await axios.get(endpoint);
        //console.log(response.data);
        const cotacaoBC = response.data.value[0];
        if(!cotacaoBC) {
            return null;
        }
        let cotacao = new Cotacao({
            compra: cotacaoBC.cotacaoCompra,
            venda: cotacaoBC.cotacaoVenda,
            data: cotacaoBC.dataHoraCotacao
        });
        await cotacao.save();
        return cotacao;
    } catch (error) {
        console.error(error);
        return null;
    }
    
}

consultar()
