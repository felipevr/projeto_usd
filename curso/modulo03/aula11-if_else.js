var person1 = {
    name: 'Ana',
    age: 17,
    gender: 'F'
}

var person2 = {
    name: 'João',
    age: 20,
    gender: 'M'
}

var person3 = {
    name: 'Maria',
    age: 20,
    gender: 'F'
}

var person4 = {
    name: 'João',
    age: 12,
    gender: 'M'
}

let person = person4

if (person.age >= 18) {
    if (person.gender == 'F') {
        console.log('Saiam da rua!')
    } else {
        console.log('Já pode dirigir!')
    }
} else if (person.gender == 'F') {
    console.log('É de menor!')
} else {
    console.log('Vai jogar bola muleque.')
}