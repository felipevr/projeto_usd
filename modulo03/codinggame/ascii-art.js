/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

const index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';

var letters = [];
console.error(L, H, T);
for (let i = 0; i < H; i++) {
    const ROW = readline();
    let N = ROW.length / L;
    for(let j = 0; j < N; j++) {
        start = j*L;
        if(letters[j] == undefined) {
            letters[j] = [];
        }
        letters[j][i] = ROW.substr(start, L);
    }
//console.error(ROW);
}


for (let i = 0; i < H; i++) {
    var line = '';
    for (let j = 0; j < T.length; j++) {
        letra = T.charAt(j).toUpperCase();
        li = index.indexOf(letra);
        if(li < 0) {
            li = 26;
        }
        line += letters[li][i];
        
    }
    console.log(line);
}
//console.error(index.indexOf(T));