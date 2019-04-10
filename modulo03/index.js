const readline = require('readline-sync');
const axios = require('axios');
const { linkType, get } = require("get-content");

const xpression = /((www\.|(http|https)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/gi
const regex = new RegExp(xpression);

let url = readline.question("Entre com a URL desejada: ");

if(url.match(regex)) {
  console.log("Estamos processando...");
  axios.get(url, {responseType: 'text'})
  .then(function (result){
    console.log(result);
  })
  ;
} else {
  console.log('A URL informada não é válida');
  return;
}

let type = linkType(url);

if (!type) {
    url = 'http://'+url;
    type = linkType(url);
}


console.log(url);


console.log("tipo: " + type);

get(url).then((pageContent) => {
    console.log(pageContent); // <html>\n\t<head>\n...'
  }).catch((err) => {
    console.warn(err); // Something happen !
  });
