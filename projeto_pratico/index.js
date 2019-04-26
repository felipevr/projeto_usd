

const getUrl = require('./bots/botURLReader');
const downloadPage = require('./bots/botDownPage');
const scrapingOG = require('./bots/botScrapingOG');
const Spider = require('./bots/botSpider');
const PageRepository = require('./model/pageRepository');


const main = function () {

    const url = getUrl();

    if (!url) {
        console.log('A URL informada não é válida');
        return;
    }

    console.log("Estamos processando...");

    downloadPage(url, Spider, (err, urls) => {
        urls.forEach(url => {
            downloadPage(url, scrapingOG, (err, page) => PageRepository.save(page));
        });
        return true;
    });

    //downloadPage(url, scrapingOG);


};


main();

return;


