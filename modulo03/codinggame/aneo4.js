
var speed = parseInt(readline());
const lightCount = parseInt(readline());
console.error(speed, lightCount);

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
    if(!checkAgain) {
        console.error("G:"+proveGreenLight(speed, distances, durations, lightCount));
    }
} while(checkAgain && speed > 1);

console.log(speed);

function convertSpeed(speed) {
    //convert to m/s
    return speed * 1000/3600;
}

function checkSpeed(speed) {
        
    let i = 0;
    var distance = 0
    while(speed > 1 && i < lightCount) {
        var distance = distances[i];
        var duration = durations[i];
            
        var time = (distance)/convertSpeed(speed);
            
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
        
        console.error('S:'+(speed));
        i++;
    }
    return speed;
}

function reduceSpeed(speed) {
    return speed - 1;
}

function proveGreenLight(predictedSpeed, distanceArr, durationArr, light_count) {

    for (let i = 0; i < light_count; i++) {
        //# how much time do I have to spend to get to the light
        secondsToLight = distanceArr[i]/predictedSpeed

        //# calculation if it is a green or red phase
        period = secondsToLight/durationArr[i]
        if(Math.floor(period) % 2 !== 0)
            return  false;
    }

    return true;
}