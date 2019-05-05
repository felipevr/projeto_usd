
const ogReader = require('./og-reader/index');

const PageRepository = require('./model/pageRepository');


const main = function () {

    const url = ogReader.getUrl();

    if (!url) {
        console.log('A URL informada não é válida');
        return;
    }

    console.log("Estamos processando...");

    ogReader.downloadPage(url).then(result => {
        let spiderResult = ogReader.spider(result);

        spiderResult.forEach(url => {
            ogReader.downloadPage(url).then(result => {
                const page = ogReader.scrap(result);
                if(page) {
                    PageRepository.save(page);
                }
            })
            .catch((err) => err)
            ;
        });
    })
    .catch((err) => err)
    ;

    //downloadPage(url, scrapingOG);


};


main();

return;


