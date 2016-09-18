var numSup = 10;

function funNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) + 1;
}

for(var i = 1; i <= 1000; i += 1){
	var numRandom = funNumRandom(numSup);
	document.write(numRandom + " ");
}