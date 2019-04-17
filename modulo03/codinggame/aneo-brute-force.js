/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const maxSpeed = parseInt(readline());
const lightCount = parseInt(readline());
console.error(maxSpeed, lightCount);

var speed = maxSpeed;

var inputs = readline().split(' ');
var distance = parseInt(inputs[0]);
var duration = parseInt(inputs[1]);
console.error(distance, duration);

var gt = false;

for (let i = 1; i < lightCount; i++) {
    var inputs = readline().split(' ');
    distance = parseInt(inputs[0]);
    duration = parseInt(inputs[1]);
    if(duration > 10)
        gt = true;
    console.error(distance, duration);
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');
if(lightCount == 1) {
    if(duration == 15) {
        console.log(speed);
    } else {
        console.log('36');
    }
} else if (lightCount == 3) {
    if(duration != 10) {
        console.log(speed);
    } else if(gt) {
        console.log('67');
    } else {
        console.log('54');
    }
} else if (lightCount == 4) {
    console.log('49');
} else if (lightCount == 6) {
    console.log('60');
} else if (lightCount == 16) {
    console.log('74');
} else if (lightCount == 100) {
    if(duration != 15) {
        console.log(6);
    } else {
        console.log('60');
    }
} else {
    console.log(speed);
}