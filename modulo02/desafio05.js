/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
DESAFIO 03
*/
const readline = require('readline-sync');

let nome = readline.question("Qual seu nome? ");
let idade = readline.question("Qual sua idade? ");
let telefone = readline.question("Qual seu telefone? ");

console.log(nome + " tem " + idade + " anos e seu telefone é "+telefone);