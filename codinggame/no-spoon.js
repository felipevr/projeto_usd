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
    
    for (let j = y+1; j < width; j++) {
        if(matrix[x][j] == '0') {
            x2 = x;
            y2 = j;
            break;
        }
    }
    
    for (let i = x+1; i < height; i++) {
        if(matrix[i][y] == '0') {
            x3 = i;
            y3 = y;
            break;
        }
    }
    
    return ''+y+' '+x+' '+y2+' '+x2+' '+y3+' '+x3
    
}