var studenti = [
	{
		nome: 'Matteo',
		corso: 'Crea il tuo primo logo',
		età: 27,
		mail: 'matteo@lacerba.io'
	},
	{
		nome: 'Michele',
		corso: 'JavaScript Base',
		età: 28,
		mail: 'michele@lacerba.io'
	},
	{
		nome: 'Daniele',
		corso: 'Strategie di monetizzazione',
		età: 24,
		mail: 'daniele@lacerba.io'
	},
	{
		nome: 'Marco',
		corso: 'CSS avanzato',
		età: 25,
		mail: 'marco@lacerba.io'
	}
];


var messaggio = "";
var studente;
var ricerca;

function print(message){
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}

function cercaStudente(nome) {
	for(var i = 0; i < studenti.length; i++){
		studente = studenti[i];
		if(ricerca === studente.nome){
			messaggio = datiStudente(studente);
			print(messaggio);
		}
	}
}

function datiStudente(studente){
	var report = '<h2>Studente: ' + studente.nome + '</h2>';
	report += '<p>Corso: ' + studente.corso + '</p>';
	report += '<p>Età: ' + studente.età + '</p>';
	report += '<p>Mail: ' + studente.mail + '</p>';
	return report;
}

while(true){
	ricerca = prompt("Cerca uno studente. Inserire il nome per visualizzare il profilo, ed esci per chiudere il programma");
	if(ricerca.toLowerCase() === 'esci'){
		break;
	}
	cercaStudente(ricerca);


}
/*
for(var i = 0; i < studenti.length; i++){
	studente = studenti[i];
	messaggio += '<h2>Studente: ' + studente.nome + '</h2>';
	messaggio += '<p>Corso: ' + studente.corso + '</p>';
	messaggio += '<p>Età: ' + studente.età + '</p>';
	messaggio += '<p>Mail: ' + studente.mail + '</p>';
}
*/

print(messaggio)