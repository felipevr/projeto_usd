/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

var Xmax = W - 1;
var Ymax = H - 1;
var Xmin = 0;
var Ymin = 0;

var batmanX = X0;
var batmanY = Y0;

var previousX = X0;
var previousY = Y0;

var distanceX = Xmax;
var distanceY = Ymax;

var move = '0 0';

var Xrate, Yrate = 0;
console.error(W, H);

// game loop
while (true) {
    const bombDirection = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.error(bombDirection);    
    //console.error(bombDirection.length);

    //console.log(Xmax + " " + Ymax);

    move = getBatmanNextMove(bombDirection);

    // the location of the next window Batman should jump to.
    console.log(move);
}

function getBatmanNextMove(bombDirection) {

    Xrate = Yrate = 0;
    distanceX = distanceY = 0;

    if(bombDirection.includes("R")) {
        Xrate = 1;
        distanceX = Xmax - batmanX;
        Xmin = batmanX;
    } else if(bombDirection.includes("L")) {
        Xrate = -1;
        distanceX = batmanX- Xmin;
        Xmax = batmanX;
    }

    if(bombDirection.includes("D")) {
        Yrate = 1;
        distanceY = Ymax - batmanY;
        Ymin = batmanY;
    } else if(bombDirection.includes("U")) {
        Yrate = -1;
        distanceY = batmanY - Ymin;
        Ymax = batmanY;
    }

    console.error(Xrate, Yrate);
    console.error(distanceX, distanceY);

    batmanX = batmanX + Math.ceil(distanceX/2)*Xrate;
    batmanY = batmanY + Math.ceil(distanceY/2)*Yrate;

    let move = batmanX + " " + batmanY;

    return move;
}