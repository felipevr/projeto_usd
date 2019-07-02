/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
DESAFIO 5 a 8
*/
const readline = require('readline-sync');

let numero1 = readline.question("Informe um valor: ");
let numero2 = readline.question("Informe outro valor: ");

let soma = Number(numero1) + Number(numero2);

console.log("A soma dos 2 valores  é "+soma);

let sub = Number(numero1) - Number(numero2);

console.log("A subtracao dos 2 valores  é "+sub);


let mult = Number(numero1) * Number(numero2);

console.log("A multiplicaçao dos 2 valores  é "+mult);

let div = Number(numero1) / Number(numero2);

console.log("A divisao dos 2 valores  é "+div);