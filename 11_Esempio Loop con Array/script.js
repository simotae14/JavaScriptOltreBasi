var classifica = [
	'Alberto Contador',
	'Fabio Aru', 
	'Mikel Landa',
	'Andrey Amador',
	'Ryder Hesjedal'
];

function print(message) {
	document.write(message);
}

function visualizzaClassif(array) {
	var classifHtml = '<ol>';
	for(var i = 0; i < array.length; i++){
		classifHtml += '<li>' + array[i] + '</li>';
	}
	classifHtml += '</ol>';
	print(classifHtml);
}

visualizzaClassif(classifica);