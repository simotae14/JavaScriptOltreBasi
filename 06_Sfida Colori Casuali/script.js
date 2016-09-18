var html = '';
var rgbColor;


function createColor(){
	return Math.floor(Math.random() * 256); 
}

function createRGB(){
	red = createColor();
	blue = createColor();
	green = createColor();
	return 'rgb(' + createColor() + ',' + createColor() + ',' + createColor() + ')';
}

function printResult(){
	document.write(html);
}


for(var i = 0; i < 10; i+= 1){
	rgbColor  = createRGB();
	html += '<div style="background-color:' + rgbColor +'"></div>';
}

printResult();

