/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 03 - DESAFIO 04

Refatorado para usar funções - vide desafio 02 - modulo 04

JOGO DE PAR OU IMPAR
*/
const readline = require('readline-sync');

function main() {
    let impar = parseInt(readline.question("Par ou impar (0 ou 1)? "));
    let numero = parseInt(readline.question("Informe um numero de 1 a 5: "));

    let aleatorio = numeroAleatorio();

    console.log("Computador: " + aleatorio);

    if (ganhou(impar, numero, aleatorio)) {
        console.log("Ganhou miseravil! ");
    }
    else {
        console.log("Perdeu playboy!");
    }
}

function numeroAleatorio() {
    return Math.floor((Math.random() * 5) + 1);
}

function ganhou(impar, numero, aleatorio) {   
    let soma = numero + aleatorio;

    return soma % 2 == impar;
}

main();