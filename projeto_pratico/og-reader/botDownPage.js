
const axios = require('axios');

const downloadPage = function (url) {

    return axios.get(url, { responseType: 'text' })
        // .then((result) => {
        //     for (let callback of callbacks) {
        //         result = callback(null, result)
        //         if(!result) {
        //             //console.log("Não foi possivel capturar tudo da " + url);
        //             break;
        //         }
        //     }
        // })
        // .catch((err) => callbacks[0](err, null))
        ;

};

module.exports = downloadPage;