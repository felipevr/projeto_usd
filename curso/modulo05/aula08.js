//
// MÉTODOS DE ORDEM SUPERIOR DA CLASSE ARRAY
//
// https://unicode.org/emoji/charts/full-emoji-list.html
//

function main() {
    const nomes = ['Paulo', 'Jose', 'Ana', 'Felipe', 'Maria', 'Tião'];

    const idades = new Array(33, 1, 5, 9, 14, 24);

    let animals = ['🐔', '🐷', '🐑', '🐇'];

    let emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😇', '😍', '😘'];

    let costume = ['💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖'];

    let hands = ['👍', '👎', '✋', '✊', '👊', '🙏', '🤝', '🙌', '👏', '👆', '👇', '🖕', '🤙', '🤘', '🤟', '🤞', '✌'];

    let first = '✂';

    let almostFirst = '🌀';

    //algumasFuncoes(animals, animals[3], idades);

    //algumasFuncoes(hands, hands[hands.length-1], nomes);

    let tudao = costume.concat(emojis).concat(hands).concat(animals).concat([first, almostFirst]);

    //algumasFuncoes(hands, first, tudao);

    // outrasFuncoes(costume, first, tudao);

    // outrasFuncoes(idades, almostFirst, nomes);

    aindaOutrasFuncoes(idades, almostFirst, nomes);

}

const algumasFuncoes = (arr, item, arr2) => {

    // console.log(`Percorre um array`);
    // arr.forEach((nome, index, arr) => console.log(nome, index, arr));

    console.log(`Percorre um array 2`);
    arr.forEach((nome) => console.log(nome));

    console.log(`Acha um item no array`);
    console.log(arr.find(value => value === item));

    console.log(`Filtra os elementos de um array`);
    //console.log(arr2.filter(valor => valor.search('o') >= 0));
    console.log(arr2.filter(valor => valor >= item));
    
};

const outrasFuncoes = (arr, item, arr2) => {

    console.log(`Mapeia array`);
    var result = arr.map((valor, index) => {
        return { index: index, valor : valor + '  ', a: item + ' ' }
    });
    console.log(result);

    console.log(`Reduz um array`);
    var result2 = arr.reduce((acumulador, valor) => acumulador + valor, '');
    console.log(result2);

    // console.log(`Ordena um array`);
    // var result3 = arr2.sort();
    // console.log(result3);

    console.log(`Ordena um array 2`);
    var result3 = arr2.sort((a, b) => b > a);
    console.log(result3);


};


const aindaOutrasFuncoes = (arr, item, arr2) => {

    console.log(`Todos itens no array`);
    var result = arr2.every(valor => valor < item);
    console.log(result);

    console.log(`Todos itens no array2`);
    var result = arr2.every(valor => valor.search('e') >= 0);
    console.log(result);

    console.log(`Algum item no array`);
    var result = arr2.some(valor => valor.search('e') >= 0);
    console.log(result);


};


main();