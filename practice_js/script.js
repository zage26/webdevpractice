//Functions
function toggleStyle(elements, b) {
	if (b.innerHTML === "Style2") {
		for (var i = 0; i < elements.length; i++) {
			elements[i].className = "style2";	
		}
	} 
	else {
		for (var i = 0; i < elements.length; i++) {
			elements[i].className = "style1";	
		}
	}
}

function toggleText(b) {
	if (b.innerHTML === "Style2") {
		changeText(b, "Style1");
	} 
	else {
		changeText(b, "Style2");
	}
}

function changeText(element, text) {
	element.innerHTML = text;
}

//Driver code 
var button = document.querySelector("button");
var pars = document.querySelectorAll("p");
button.addEventListener("click", function() {
	toggleStyle(pars, this);
	toggleText(this);
});