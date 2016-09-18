var domande = [
	["Che linguaggio si usa per inserire contenuti in un sito?", "HTML"],
	["Che linguaggio si usa per modificare contenuto in un sito?", "CSS"],
	["Che linguaggio si usa per far interagire l'utente?", "JAVASCRIPT"]
];

var rispEsatte = 0;
var risposta;
var messaggio;

function print(message) {
	document.write(message);
}

for(var i = 0; i < domande.length; i++) {
	risposta = prompt(domande[i][0]);
	if(risposta.toUpperCase() === domande[i][1]){
		rispEsatte += 1;
	}
}

messaggio = "Hai indovinato " + rispEsatte  + " domande.";

print(messaggio);