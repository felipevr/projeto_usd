/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 03 - DESAFIO 05

Refatorado para usar funções - vide desafio 02 - modulo 04

BALADA
*/

const rowOfPeople = [
    {
        name: 'Ana',
        age: 22,
        gender: 'F'
    },
    {
        name: 'João',
        age: 17,
        gender: 'M'
    },
    {
        name: 'José',
        age: 22,
        gender: 'M'
    },
    {
        name: 'Fernanda',
        age: 25,
        gender: 'F'
    },
    {
        name: 'Maria',
        age: 15,
        gender: 'F'
    }
];

function main() {
    let index = 0;

    do {
        let person = rowOfPeople[index];

        console.log(person.name);
        if (ehDeMaior(person)) {
            if (ehMulher(person)) {

                console.log('Pode entrar de graça!')
            } else {
                console.log('Pague a entrada!')
            }
        } else {
            console.log('Não pode entrar.')
        }

        index++;
    } while (rowOfPeople.length > index);

}

function ehDeMaior(person) {
    return person.age >= 18;
}

const ehMulher = (person) => person.gender == 'F';

main();