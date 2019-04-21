
const readline = require('readline-sync');
const { linkType, get } = require("get-content");

const getUrl = function () {

    const xpression = /((www\.|(http|https)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/gi
    const regex = new RegExp(xpression);

    let url = readline.question("Entre com a URL desejada: ");

    console.log(''); //readline bugado!
        
    let type = linkType(url);

    if (!type) {
        url = 'http://' + url;
        type = linkType(url);
    }
    
    // console.log(url);

    // console.log("tipo: " + type);

    // get(url).then((pageContent) => {
    //     console.log(pageContent); // <html>\n\t<head>\n...'
    // }).catch((err) => {
    //     console.warn(err); // Something happen !
    // });

    return url.match(regex) ? url : null;

};

module.exports = getUrl;