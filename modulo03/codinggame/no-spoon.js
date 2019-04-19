/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
var matrix = [];
console.error(width, height);
for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    matrix[i] = [];
    for (let j = 0; j < width; j++) {
        matrix[i][j] = line.charAt(j);
    }
    //console.error(line);
}
console.error(matrix);

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        node = checkNodes(i, j);
        if (node != '') {
            console.log(node);
        }
    }
    //console.error(line);
}

function checkNodes(x, y) {
    
    if (matrix[x][y] != '0') {
        return '';
    }
        
    var x1, y1, x2, y2, x3, y3;
    
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');


// Three coordinates: a node, its right neighbor, its bottom neighbor
console.log('0 0 1 0 0 1');
console.log('1 0 -1 -1 -1 -1');
console.log('0 1 -1 -1 -1 -1');