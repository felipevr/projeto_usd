/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 
var board = [];
var lines = [];
var columns = [];
var blocks = 0;

const N = parseInt(readline());

for (let j = 0; j < N; j++) {
    columns[j] = 0;
}

for (let i = 0; i < N; i++) {
    const ROW = readline();
    board[i] = [];
    lines[i] = 0;
    //console.error(ROW);
    
    for (let j = 0; j < N; j++) {
        var p = ROW.charAt(j);
        board[i][j] = p;
        if(p == 'X') {
            lines[i]++;
            columns[j]++;
            blocks++;
        }
        
    }
}

//console.error(board);
console.error(lines);
console.error(columns);
console.error(blocks);

var rookies = 0;
var harmless = true;
var searchBlocks = true;
for (let k = 0; k < 3; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            var p = board[i][j];
            
            if(p == '.' && harmless) {
                if(checkHarmless(i, j) && lookForBlocks(j, searchBlocks)) {
                    harmless = false;
                    board[i][j] = 'R';
                    rookies++;
                            
                    //no blocks at line, only one hook allowed
                    if(lines[i] == 0) {
                        break;
                    }
                }
            } else if(p == 'X') {
                harmless = true;
            }
            
            if (i == 1 && j == 2) {
                console.error(checkHarmless(i, j), lookForBlocks(j, searchBlocks), searchBlocks);
            }
            
            
        }
        harmless = true;
    }
    searchBlocks = false;
    console.error(k);
    console.error(board);
    //console.error(checkHarmless(1, 2), N);    break;
}


console.log(rookies);

function lookForBlocks(y, searchBlocks) {
    if(!searchBlocks) {
        return true;
    }
    
    for (let i = 0; i < N; i++) {
        if ( board[i][y]  == 'X' ) {
            return true;
        }
    }
    return false;
}

function checkHarmless(x, y) {

    var hlLine = true;
    var hlColumn = true;
    
    for (let i = 0; i < N; i++) {
        var p = board[i][y];
        if(p == 'R') {
            hlLine = false;
            if(i > x) {
                break;
            }
        } else if (p == 'X') {
            hlLine = true;
            if(i > x) {
                break;
            }
        } else if (i == x && !hlLine) {
            break;
        }
    }
    
    for (let j = 0; j < N; j++) {
        var p = board[x][j];
        if(p == 'R') {
            hlColumn = false;
            if(j > y) {
                break;
            }
        } else if (p == 'X') {
            hlColumn = true;
            if(j > y) {
                break;
            }
        } else if (j == y && !hlColumn) {
            break;
        }
    }
    
    return hlLine && hlColumn;
}