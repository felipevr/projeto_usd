function generate(size, lowest, highest) {
	var numbers = [];
	for(var i = 0; i < size; i++) {
		var add = true;
		var randomNumber = Math.floor(Math.random() * highest) + 1;
		for(var y = 0; y < highest; y++) {
			if(numbers[y] == randomNumber) {
				add = false;
			}
		}
		if(add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
  
	//sort
	var highestNumber = 0;
	for(var m = 0; m < numbers.length; m++) {
		for(var n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
    //document.getElementById("numbers").innerHTML = numbers.join(" - ");
    console.log(numbers.join(", "));
}

const qtdJogos = 10;
// for(let n = 0; n < qtdJogos; n++) {
//     generate(6, 1, 60);
// }

function megaSena(qtdJogos, dezenas) {

    for(let n = 0; n < qtdJogos; n++) {
        generate(dezenas, 1, 60);
    }

}

megaSena(1, 10);
megaSena(2, 8);
megaSena(2, 7);