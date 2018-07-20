let box = document.querySelector("#box");
box.addEventListener("click", function() {
	if(box.classList.contains("move")) {
		box.classList.remove("move");
	} else {
		box.classList.add("move");
	}
})

let input = document.querySelector("#my-input")
input.addEventListener("keydown", function(event) {
	if(event.key === "Enter") {
		input.value = "";
	}
})