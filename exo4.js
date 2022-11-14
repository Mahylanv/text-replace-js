// SELECTION
var textearea = document.getElementsByTagName('textarea');
console.log(textearea);

var paragraphe = document.getElementsByTagName('p');
console.log(paragraphe);

// EVENEMENT
textearea[0].addEventListener('input', changeParagraphe);

// FONCTION
function changeParagraphe() {
	console.log('blur');
	paragraphe[0].innerHTML = textearea[0].value;
}