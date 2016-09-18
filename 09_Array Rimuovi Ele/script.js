var listaSpesa = [
	'uova',
	'latte', 
	'burro',
	'farina'
];

var ultimoEle = listaSpesa.pop();

document.write(listaSpesa);

alert("Rimosso Elemento "+ ultimoEle);

var primoEle = listaSpesa.shift();


document.write('<br>' + listaSpesa);

alert("Rimosso Elemento "+ ultimoEle);

