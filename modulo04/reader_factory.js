function readerFactory() {
    const readline = require('readline');

    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return reader;
}

const reader = readerFactory();

reader.question("Está funcionando?", function(value) {
    console.log(value);
    reader.close();
});