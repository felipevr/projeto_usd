const cheerio = require('cheerio');

const readLinks = function($, meta) {
    return Array.from($('a')).map(link => $(link).attr('href'));

};

const Spider = function (err, page) {
    if(err) {
        console.error(err);
    }

    const $ = cheerio.load(page.data);

    return readLinks($);
};


module.exports = Spider;