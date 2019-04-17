/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 03 - DESAFIO 04

JOGO DE PAR OU IMPAR
*/
const readline = require('readline-sync');

let impar = parseInt(readline.question("Par ou impar (0 ou 1)? "));
let numero = parseInt(readline.question("Informe um numero de 1 a 5: "));

let aleatorio = numeroAleatorio();

let soma = numero + aleatorio;
console.log("Computador: " + aleatorio);

if(soma % 2 == impar) {
    console.log("Ganhou miresavil! ");
}
else {
    console.log("Perdeu playboy!");
}


function numeroAleatorio() {
    return Math.floor((Math.random() * 5) + 1);
}