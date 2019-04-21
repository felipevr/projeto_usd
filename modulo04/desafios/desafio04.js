/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 04 - DESAFIO 04

*/


/*
Escreva uma função que ao receber uma string retorna um array com a posição de
cada caracter da string no alfabeto.

*/

function main() {


    let string = "dominando o javascript"


    console.log(`As posições no alfabeto da frase "${string}"`);

    console.log(posicoesNoAlfabeto(string));
}


function posicoesNoAlfabeto(string) {
    let posicoes = [];

    //criando um array com o alfabeto
    var alphabet = "abcdefghijklmnopqrstuvwxyz ".split('');

    for (let i = 0; i < string.length; i++) {
        chari = string.charAt(i);
        //verificando a posição de uma letra no alfabeto
        if (alphabet.indexOf(chari) > -1) {
            //Incluindo novo valor em um array
            posicoes.push(alphabet.indexOf(chari));
        }
    }


    return posicoes;
}



main();