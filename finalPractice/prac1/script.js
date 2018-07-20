$(document).ready(function() {
	let plus = $("#plus");
	let minus = $("#minus");
	let points = $("#points");
	let number = 0;

	plus.on("click", function() {
		number++;
		points.html(number);
	})

	minus.on("click", function() {
		number--;
		points.html(number);
	})
})