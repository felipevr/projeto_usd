

const getUrl = require('./bots/botURLReader');
const downloadPage = require('./bots/botDownPage');
const scrapingOG = require('./bots/botScrapingOG');



const main = function () {

    const url = getUrl();

    if (!url) {
        console.log('A URL informada não é válida');
        return;
    }

    console.log("Estamos processando...");

    downloadPage(url, scrapingOG);


};


main();

return;


