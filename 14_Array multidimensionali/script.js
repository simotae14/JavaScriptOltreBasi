var classifica = [
	['Alberto Contador', 'Spagna'],
	['Fabio Aru', 'Italia'], 
	['Mikel Landa', 'Spagna'],
	['Andrey Amador', 'Costa Rica'],
	['Ryder Hesjedal', 'Canada']
];

function print(message) {
	document.write(message);
}

function visualizzaClassif(array) {
	var classifHtml = '<ol>';
	for(var i = 0; i < array.length; i++){
		classifHtml += '<li>' + array[i][0] + ' - ' + array[i][1] + '</li>';
	}
	classifHtml += '</ol>';
	print(classifHtml);
}

visualizzaClassif(classifica);