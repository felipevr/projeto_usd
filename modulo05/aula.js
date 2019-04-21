

const nomes = ['Paulo', 'Jose', 'Ana', 'Felipe', 'Maria', 'Tião'];

const idades = new Array(33, 1, 5, 9, 14, 24);

let animals = ['🐔', '🐷', '🐑', '🐇'];


function percorrer(arr) {

    console.log('Percorrendo um array com WHILE');

    let index = 0;

    while (index < arr.length) {

        console.log(arr[index]);
        index++;

    }

}

const percorrer2 = function (arr) {

    console.log('Percorrendo um array com DO ... WHILE');

    let index = 0;

    if (arr.length < 1) {
        console.log('Array Vazio')
            return;
    }

    do {

        console.log(arr[index]);
        index++;

    } while (index < arr.length);

};

const percorrer3 = (arr) => {

    console.log('Percorrendo um array com FOR');

    for (let index = 0; index < arr.length; index++) {

        console.log(arr[index]);

    }

};

const percorrer4 = (arr) => {

    console.log('Percorrendo um array com FOR OF');

    for (let a of arr) {

        console.log(a);

    }

};

const percorrerComAssociacao = (arr, arr2) => {

    console.log('Nomeando os bois...');
        
    for (let a of arr) {
        // Random name for our animal
        let nameIdx = Math.floor(Math.random() * arr2.length);
    
        console.log(`${arr2[nameIdx]} o/a ${a}`);
    }
    
}

const percorrer6 = (arr, arr2) => {
        
    console.log('Percorrendo um array com FOR IN');

    for (let i in arr) {

        console.log(i);
        console.log(arr[i]);

    }
    
}

// percorrer(nomes);

// percorrer2(idades);

// percorrer2([]);

// percorrer3(nomes);

// percorrer4(idades);

percorrerComAssociacao(animals, nomes);

percorrer6(nomes);
