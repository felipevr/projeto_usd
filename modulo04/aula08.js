
var i = 0;

function chicken() {
    console.log('Galinha! ' + ++i);
    return egg();
}

function egg() {
    console.log("Ovo! " + ++i);
    return chicken();
}

console.log(chicken() + " veio primeiro!");