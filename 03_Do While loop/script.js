var numSup = 10;
var numeroRandom = funzNumRandom(numSup);
var risposta;
var tentativi = 0;
var rispEsatta = false;

function funzNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) + 1;
}

do {
	risposta = prompt("Che numero è?");
	tentativi += 1;
	if(parseInt(risposta) === numeroRandom){
		rispEsatta = true;
	}
} while(!rispEsatta)

document.write("<p>Il numero era " + numeroRandom + "</p>");
document.write("<p>Hai impiegato " + tentativi + " tentativi</p>");