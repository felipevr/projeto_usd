const getUrl = require('./botURLReader');
const downloadPage = require('./botDownPage');
const scrapingOG = require('./botScrapingOG');
const Spider = require('./botSpider');

const rodaTudo = async function(url) {

    const pages = [];

    try {
        const result = await this.downloadPage(url);
        let spiderResult = this.spider(result);

        let count = 0;
        for (let urlPage of spiderResult) {
            try {
                const result = await this.downloadPage(urlPage);
                const page = this.scrap(result);
                if(page) {
                    //PageRepository.save(page);
                    pages.push(page);
                }
            }
            catch(err) {
                //console.log(err);
                continue;
            }
            count++;
            if(count >= 10) {
                break;
            }
        };
        //console.log(PageRepository.pageList);
    } catch(err) {
        //console.log(err);
        return null;
    }
    return pages;
};

module.exports = {
    getUrl: getUrl,
    downloadPage: downloadPage,
    scrap: scrapingOG,
    spider: Spider,
    run: rodaTudo
}