function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted successfully!");
}

function giveComplement(evt) {
	evt.preventDefault();
	alert("That fits you so well! You're a cool duck!");
}


let form = document.querySelector('#contact');
let img = document.querySelector("img")

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', giveComplement);