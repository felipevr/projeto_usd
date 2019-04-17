
const maxSpeed = parseInt(readline());
const lightCount = parseInt(readline());
console.error(maxSpeed, lightCount);

var speed = maxSpeed * 1000/3600;
console.error(speed);

var distances = [], durations = [];

for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    console.error(inputs);
    distances[i] = parseInt(inputs[0]);
    durations[i] = parseInt(inputs[1]);    
}

var checkAgain = false;

do {
    checkAgain = false;
    speed = checkSpeed(speed);
} while(checkAgain);

function checkSpeed(speed) {
        
    let i = 0;
    var distance = 0
    while(speed > 1 && i < lightCount) {
        distance += distances[i];
        var duration = durations[i];
            
        var time = (distance)/speed;
            
        console.error(distance, duration);
        console.error('T:'+time);
        
        var div = (time / duration) % 2;
        console.error('D:'+div);
    
        //if(time > duration) {
        if(div > 1) { //
            speed = reduceSpeed(speed);
            distance -= distances[i];
            i--;
            checkAgain = true;
        }
        
        console.error('S:'+printSpeed(speed));
        i++;
    }
    return speed;
}

function reduceSpeed(speed) {
    return speed- (1000/3600);
}

function printSpeed(speed) {
    if(Math.floor(speed * 3600/1000) != (speed * 3600/1000)) {
        return Math.floor(speed * 3600/1000)+1;
    }
    return Math.floor(speed * 3600/1000);
}

speed = printSpeed(speed);

console.log(speed);