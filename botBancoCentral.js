const axios = require('axios');
const moment = require('moment');

const Cotacao = require('./CotacaoSchema');

const ConsultarCotacao = async () => {
        
    let data = '07-16-2019';//moment().format('MM-DD-YYYY');
    const endpoint = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json`;

    console.log(`'Consultando banco central ${data}'`);

    try {
        const response = await axios.get(endpoint);
        const cotacaoBC = response.data.value[0];
        console.log(`'Consultando banco central resultado ${cotacaoBC}'`);
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

//consultar()
module.exports = ConsultarCotacao;
