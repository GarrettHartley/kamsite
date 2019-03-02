function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function fullscreen(){
	console.log('in fullscreen');
this.classList.toggle('fullscreen');
}

document.addEventListener("DOMContentLoaded", function(event) {
	var colors = [
	'#df5a5c',
	'#d1d6c3',
	'#bb713a',
	'#879bbe',
	'#7d9c65',
	'#7d5a39',
	'#de60b9',
	'#bed01eeb',
	'#f4425c',
	'green',
	'blue',
	'purple',
	'red',
	'olive',
	'maroon',
	'teal',
	'aqua',
	'crimson',
	'coral'

	]

		var symbols = [
	'\'@@@\'',
	'\'#####\'',
	'\'%%%\'',
	'\'^^^^^\'',
	'\'&&&&&\'',
	'\')()()()()(\'',
	'\'+++++\'',
	'\'=====\'',
	'\'!!!!\'',
	'\'$$$$\'',
	'\'****\'',
	'\'----\'',
	'\'____\'',
	'\'+=+=\'',
	'\'!$!$\'',
	'\'&^&\'',
	'\'#%#%\'',
	'\'^*^\'',
	'\'(*)(*)\''
	]
	colors = shuffle(colors)
	symbols = shuffle(symbols)

	for ( var i = 0; i< colors.length; i++){
		document.documentElement.style.setProperty("--c"+i, colors[i])
	}
	for ( var i = 0; i< symbols.length; i++){
		 document.documentElement.style.setProperty("--sym"+i, symbols[i])
	}
});