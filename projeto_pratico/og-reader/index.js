const getUrl = require('./botURLReader');
const downloadPage = require('./botDownPage');
const scrapingOG = require('./botScrapingOG');
const Spider = require('./botSpider');

module.exports = {
    getUrl: getUrl,
    downloadPage: downloadPage,
    scrap: scrapingOG,
    spider: Spider
}