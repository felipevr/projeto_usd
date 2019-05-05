const cheerio = require('cheerio');
const Page = require('../model/page');

const readMetaTag = function($, meta) {
    return $(`meta[property="og:${meta}"]`).attr('content');

};

const scrapingOG = function (page) {

    const $ = cheerio.load(page.data);
    const pageOG = Object.create(Page);
    pageOG.title = readMetaTag($, "title");
    pageOG.type = readMetaTag($, "type");
    pageOG.image = readMetaTag($, "image");
    pageOG.url = readMetaTag($, "url");
    if (!pageOG.title && !pageOG.type && !pageOG.image && !pageOG.url) {
        return false;
    }
    //console.log(pageOG);
    return pageOG;
};


module.exports = scrapingOG;