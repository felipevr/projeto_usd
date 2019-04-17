/*
https://coddev-cursos.coursify.me/student/courses/dominando-o-javascript/
modulo 03 - DESAFIO 05

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
let index = 0;

do {
    let person = rowOfPeople[index];
            
    console.log(person.name);
    if (person.age >= 18) {
        if (person.gender == 'F') {
            
            console.log('Pode entrar de graça!')
        } else {
            console.log('Pague a entrada!')
        }
    } else {
        console.log('Não pode entrar.')
    }

    index++;
} while (rowOfPeople.length > index);
