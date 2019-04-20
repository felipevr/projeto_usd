//const readerFactory = require("./reader_factory");

//const reader = readerFactory();


function teste() {

    console.log('teste');

}

const nomeDaFuncao2 = function() {

    reader.question("qual eh o seu nome? ", function(name) {
        console.log(`teste2 ${name}`);
        reader.close();
    })

};

const square = x => x * x;


const power = (base, exponent) => {

    console.log(base, exponent);

    if(exponent > 0) {
        return base * power(base, exponent - 1);
    }

    return 1;

};

//teste();

//console.log(power(2, 10));

//console.log(power(4, 5));

console.log(power(16, 2.5));

console.log(power(8, 3));

console.log(square(2));

console.log(square(16));