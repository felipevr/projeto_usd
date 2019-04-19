/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 03 - DESAFIO 06

*/
const readline = require('readline-sync');


/*
Faça um programa que receba uma string contendo uma expressão aritmética
simples (exemplo: 25 + 32) e resolva sem utilizar o Math.eval.
a. Valide a entrada do usuário com a seguinte regex: (\d+\s*(\*|\/|\+|\-)\s*\d*).
b. Você pode utilizar a função split que transforma uma string em array
quebrando a entrada do usuário pelos espaços entre os números e o
operador. Exemplo:
let value = ‘50 * 4’;
let values = value.split(‘ ‘);
// values => [‘50’, ‘*’, ‘4’]
// values[0] == ‘50’
// values[1] == ‘*’
// values[2] == ‘4’

c. Cada posição do array resultante pode ser capturado assim: array[index];

*/
let expression = readline.question("Informe uma expressão aritmética simples : ");

let values = expression.split(' ');


const regularExpression = /(\d+\s*(\*|\/|\+|\-)\s*\d*)/
const regex = new RegExp(regularExpression);

if(values.length !== 3 || !expression.match(regex)) {
    console.log('Expressão inválida!');
    return;
}

op = values[1];
esq = parseInt(values[0]);
dir = parseInt(values[2]);

var resultado = 0;
if(op == '+') {
    resultado = esq + dir;
} else if(op == '*') {
    resultado = esq * dir;
} else if(op == '/') {
    resultado = esq / dir;
} else if(op == '-') {
    resultado = esq - dir;
} else {
    console.log('Operador inválido!');
    return;
}

console.log('O resultado é ' + resultado);