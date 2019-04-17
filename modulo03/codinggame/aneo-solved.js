
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
} while(checkAgain && speed > 1);

console.log(speed);

function convertSpeed(speed) {
    //convert to m/s
    return speed * 1000/3600;
}

function checkSpeed(speed) {
        
    let i = 0;
    while(speed > 1 && i < lightCount) {
        var distance = distances[i];
        var duration = durations[i];
            
        var time = (distance)/convertSpeed(speed);
            
        console.error(distance, duration);
        console.error('T:'+time);
        
        var div = Math.round(time / duration*10000)/10000;
        console.error('D:'+div,  time / duration);
        div = div  % 2;
        console.error('M:'+div);
    
        //if(time > duration) {
        if(div >= 1) { //
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
