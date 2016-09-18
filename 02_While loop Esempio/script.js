var numSup = 2000;
var numeroRandom = funzNumRandom(numSup);
var risposta;
var tentativi = 0;

function funzNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) + 1;
}

while(risposta !== numeroRandom){
	risposta = funzNumRandom(numSup);
	tentativi += 1;
}

document.write("<p>Il numero era " + numeroRandom + "</p>");
document.write("<p>Il computer ha impiegato " + tentativi + " tentativi</p>");