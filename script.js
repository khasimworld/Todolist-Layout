var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var textNode=document.createTextNode(input.value);
	li.appendChild(textNode);
	ul.appendChild(li);
	input.value = "";//empty the input
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {//key code=13 for enter keyboard key.
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);//we only need to call the function reference.

input.addEventListener("keypress", addListAfterKeypress);