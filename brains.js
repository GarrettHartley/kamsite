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


document.addEventListener("DOMContentLoaded", function(event) {
	var colors = [
	'#df5a5c',
	'#d1d6c3',
	'#bb713a',
	'#879bbe',
	'#7d9c65',
	'#7d5a39',
	'#de60b9',
	'#bed01eeb']

	colors = shuffle(colors)

	var spans = document.querySelectorAll(".cc")

	for ( var i = 0; i< colors.length; i++){
		spans[i].style.setProperty("--c"+i, colors[i])
	}
    // Your code to run since DOM is loaded and ready
});