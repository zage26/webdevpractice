var bPar = document.getElementById("buttonPar");
var bList = document.getElementById("buttonList");

var ps = document.querySelectorAll("p");
var listI = document.querySelectorAll("li");

function changeColor(collection, button) {
	var index = 0;
	while (index < collection.length) {
		 if (collection[index].className === "" || collection[index].className === "red") {
			collection[index].className = "green";
			button.innerHTML = "Make list items red";
		} else {
			collection[index].className = "red";
			button.innerHTML = "Make list items green";
		}
		index += 1;
	}
}

function addBorders(collection, button) {
	var index = 0;
	while (index < collection.length) {
		if (collection[index].className === "" || collection[index].className === "no_borders") {
			collection[index].className = "borders";
			button.innerHTML = "Take borders away from paragraphs";
		} else {
			collection[index].className = "no_borders";
			button.innerHTML = "Put border on paragraphs";
		}
		index+=1;
	}
}

bPar.addEventListener("click", function() {
	addBorders(ps, this);
});

bList.addEventListener("click", function() {
	changeColor(listI, this);
});

