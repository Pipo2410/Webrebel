var numberOfNumbers = +prompt('How many numbers do you want?');

var numbers = [];
var sucet = 0;

for(var i = 0; i < numberOfNumbers; i++) {

	numbers[i] = +prompt('Add number ' + (i + 1));

	sucet += numbers[i];

}

if (sucet % 2 === 0) {
	alert('Sucet je parne cislo: ' + sucet);
} else {
	alert('Sucet je neparne cislo: ' + sucet);
}


var number = +prompt('Inser random number');

function calculate(num) {
	var result = num * 3;
	return result;
}

var result = calculate(number);
console.log(result);