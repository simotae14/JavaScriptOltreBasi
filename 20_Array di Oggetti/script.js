var domande = [
	{
		domanda: "Che linguaggio si usa per inserire contenuti in un sito?", 
		soluzione: "HTML"
	},
	{
		domanda: "Che linguaggio si usa per modificare contenuto in un sito?", 
		soluzione: "CSS"
	},
	{
		domanda: "Che linguaggio si usa per far interagire l'utente?", 
		soluzione: "JAVASCRIPT"
	}
];

var rispEsatte = 0;
var risposta;
var messaggio;

function print(message) {
	document.write(message);
}

for(var i = 0; i < domande.length; i++) {
	risposta = prompt(domande[i].domanda);
	if(risposta.toUpperCase() === domande[i].soluzione){
		rispEsatte += 1;
	}
}

messaggio = "Hai indovinato " + rispEsatte  + " domande.";

print(messaggio);