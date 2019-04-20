const readerFactory = require("./reader_factory");

const reader = readerFactory();


function teste() {

    console.log('teste');

}

const nomeDaFuncao2 = function() {

    reader.question("qual eh o seu nome? ", function(name) {
        console.log(`teste2 ${name}`);
        reader.close();
    })

};

const square = function(x) {

    x *= x;

    return x;

};

const power = function (base, exponent) {

    let result = 1;

    for (let count = 0; count < exponent; count++) {

        result *= base;

    }

    return result;


};

//teste();

//nomeDaFuncao2();

console.log(power(2, 10));

console.log(result);