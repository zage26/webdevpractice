function changeWidth(element) {
	let elementClass = element.className;
	if (elementClass.match("wide")) {
		element.className = elementClass.replace(" wide", "");
	} else {
		element.className += " wide"; 
	}
}

let box1 = document.querySelector(".box1");
box1.addEventListener("click", function() {
	changeWidth(box1);
})