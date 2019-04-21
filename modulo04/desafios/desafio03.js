/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 04 - DESAFIO 03

*/
//const readline = require('readline-sync');


/*
Uma forma simples de percorrer uma string é:

a. Escreva uma função que conte quantas letras J e S maiúsculas ou minúsculas
estão contidas em uma string recebida por parâmetro.
b. Escreva uma função que receba uma string e um carácter qualquer e responda
quantos caracteres estão contidos na string.
c. Escreva uma função que receba uma determinada string e devolva ela
invertida.

*/

function main() {
    //let frase = readline.question("Informe uma frase : ");


    let string = "Dominando o JavaScript"


    console.log(`A frase "${string}"`);

    console.log('Contém ' + contaLetrasJS(string) + ' letras J e S');
    console.log('Contém ' + contaLetras(string, 'o') + ' letras o');
    console.log('Invertido fica ' + inverteString(string));
}


function contaLetrasJS(string) {
    let conta = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'J' || string.charAt(i) == 'S')
            conta++;
    }
    return conta;
}


function contaLetras(string, letra) {
    let conta = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == letra)
            conta++;
    }
    return conta;
}


function inverteString(string) {
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string.charAt(i);
    }
    return invertida;
}


main();