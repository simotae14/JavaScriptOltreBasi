var numSup = 10;

function funzNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) + 1;
}

// ciclo
var contatore = 0;
while(contatore < 10){
	var numRandom = funzNumRandom(numSup);
	document.write(numRandom);
	contatore += 1;
}
