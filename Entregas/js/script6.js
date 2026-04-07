let counter = 0;

function itera(){
	counter = counter + 1;
	document.getElementById('number').innerText = counter;
}
function reset(){
	counter = 0;
	document.getElementById('number').innerText = counter;
}
