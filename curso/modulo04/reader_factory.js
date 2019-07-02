const readline = require('readline');

const readerFactory = function () {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

module.exports = readerFactory;

/*
const reader = readerFactory();

reader.question("Está funcionando?", function(value) {
    console.log(value);
    reader.close();
});
*/