var settimana = [
	'Lunedì',
	'Martedì',
	'Mercoledì',
	'Giovedì',
	'Venerdì',
	'Sabato',
	'Domenica'
];

var giorni = settimana.join(', ');

document.write(giorni);

var lista1 = [
	'uova',
	'latte',
	'pane'
];

var lista2 = [
	'insalata',
	'carote',
	'limoni'	
];

var listaTot = lista2.concat(lista1);

var lista = listaTot.join(', ');

document.write('<br>' + lista);


var posizione = lista1.indexOf('latte');

alert("Posizione di latte: " + posizione);

