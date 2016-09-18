var studente = {
	Nome: "Daniele",
	Cognome: "Ugolini",
	Età: 24,
	Corsi: [
		'Crea un logo',
		'CSS avanzato'
	]
};

alert(studente.Cognome);

studente.Nazionalità = 'Italiana';

alert(studente.Nazionalità);

studente.Età = 30;

alert(studente.Età);


function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

var message = "<p>Ciao mi chiamo " + studente.Nome + ",</p>";
message += "<p>E ho " + studente.Età + " anni.</p>";
studente.Corsi.push('JavaScript');
message += "<p>Sono iscritto a " + studente.Corsi.length + " corsi</p>";

print(message);