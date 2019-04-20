const readline = require('readline-sync');
const axios = require('axios');
const { linkType, get } = require("get-content");




const urlReader = function () {

    const xpression = /((www\.|(http|https)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/gi
    const regex = new RegExp(xpression);

    let url = readline.question("Entre com a URL desejada: ");

    return url.match(regex) ? url : null;

};

const downloadPage = function (url, callback) {

    axios.get(url, { responseType: 'text' })
        .then((result) => callback(null, result))
        .catch((err) => callback(err, null))
        ;

};

const main = function () {

    const url = urlReader();

    if (!url) {
        console.log('A URL informada não é válida');
        return;
    }

    console.log("Estamos processando...");

    downloadPage(url, (err, page) => {
        if(err) {
            console.error(err);
        }
    });


};


main();

return;

let type = linkType(url);

if (!type) {
    url = 'http://' + url;
    type = linkType(url);
}


console.log(url);


console.log("tipo: " + type);

get(url).then((pageContent) => {
    console.log(pageContent); // <html>\n\t<head>\n...'
}).catch((err) => {
    console.warn(err); // Something happen !
});