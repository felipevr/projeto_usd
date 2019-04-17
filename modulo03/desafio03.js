/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 03 - DESAFIO 03
*/
const readline = require('readline-sync');

let numero1 = parseInt(readline.question("Informe um valor inteiro: "));
let numero2 = parseInt(readline.question("Informe outro valor inteiro: "));
let numero3 = parseInt(readline.question("Informe outro valor inteiro: "));

let maior = -99999;

if(numero2 > numero1) {
    maior = numero2;
    numero2 = numero1;
    numero1 = maior;
}

if(numero3 > numero2) {
    maior = numero3;
    numero3 = numero2;
    numero2 = maior;
        
    if(numero2 > numero1) {
        maior = numero2;
        numero2 = numero1;
        numero1 = maior;
    }
}
console.log("Em ordem crescente ");
console.log(numero3);
console.log(numero2);
console.log(numero1);
