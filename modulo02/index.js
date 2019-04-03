const readline = require('readline-sync');
const { linkType, get } = require("get-content");


let url = readline.question("Entre com a URL desejada: ");

let type = linkType(url);

if (!type) {
    url = 'http://'+url;
    type = linkType(url);
}


console.log(url);

console.log("Estamos processando...");

console.log("tipo: " + type);

get(url).then((pageContent) => {
    console.log(pageContent); // <html>\n\t<head>\n...'
  }).catch((err) => {
    console.warn(err); // Something happen !
  });
