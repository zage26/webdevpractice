function toggleColor(element) {
	var color = element.className
	if (color === "red") {
		element.className = "blue";
	} else {
		element.className = "red";
	}
}

// var list = ["red", "green", "blue", "yellow", "pink"];

// var par = document.getElementById("p1");

// var button = document.getElementById("button");
// button.addEventListener("click", function() {
// 	par.style.color = list[Math.floor(Math.random()*5)];
// 	// turnRed(this)
// });

var button = document.getElementById("button");
button.addEventListener("click", function() {
	var par = document.getElementById("p1");
	toggleColor(par);
});

