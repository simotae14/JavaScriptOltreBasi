var listaProdotti = [
	'uova',
	'latte',
	'pane',
	'insalata',
	'carote',
	'limoni',
	'pesce',
	'burro'
];

var ricerca;

function print(message) {
	document.write('<p>' + message + '</p>');
}

/* controllo se un prodotto inserito da utente è presente
devo anche poter uscire dal programma scrivendo una determinata cosa
e visualizzare lista completa prodotti con altra parola
*/

while(true){
	ricerca = prompt("Cerca un prodotto. Inserisci <Lista completa> per visualizzare tutti i prodotti, ed -esci- per chiudere il programma.");
	ricerca = ricerca.toLowerCase();
	if(ricerca === 'esci'){
		break;
	} else if(ricerca === 'lista completa') {
		print(listaProdotti.join(', '));
	} else {
		if(listaProdotti.indexOf(ricerca) >= 0){
			print("Sì, abbiamo "+ ricerca + " nel negozio.");
		} else {
			print("No, non ce l'abbiamo in negozio.");
		}
	}
}