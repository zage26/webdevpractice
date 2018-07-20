let openb = document.getElementById("button-open");

openb.addEventListener("click", function() {

	let maind = document.querySelector("div");
	let closeb = document.querySelectorAll("div button");
	let items = document.querySelectorAll("li");

	let colors = ["red", "pink", "orange", "yellow", "green", "lightblue", "blue", "violet", "lightgreen"];

	maind.className += " changeWidth"

	closeb[0].addEventListener("click", function() {
		maind.className = maind.className.replace(" changeWidth", "");
	})

	for(let i = 0; i < items.length; i++) {
		items[i].addEventListener("mouseover", function() {
			let randNum = Math.round(Math.random()*(colors.length-1));
			items[i].className = "";
			items[i].className += colors[randNum];
		})
	}
})