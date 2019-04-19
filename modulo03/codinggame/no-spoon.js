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
//console.error(matrix);

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        node = checkNodes(i, j);
        if (node !== '') {
            console.log(node);
        }
    }
    //console.error(line);
}

function checkNodes(x, y) {
    
    if (matrix[x][y] != '0') {
        return '';
    }
        
    var x2, y2, x3, y3;
    
    x2 = y2 = x3 = y3 = -1;
    
    if(y < width -1) {
        if(matrix[x][y+1] == '0') {
            x2 = x;
            y2 = y+1;
        }
    }
    
    if(x < height -1) {
        if(matrix[x+1][y] == '0') {
            x3 = x+1;
            y3 = y;
        }
    }
    
    return ''+y+' '+x+' '+y2+' '+x2+' '+y3+' '+x3
    
}
