$(document).ready(function() {

	let dropdown = $("#dropdown");
	let content = $(".ctn");

	dropdown.on("mouseover", function(){
		content.addClass("show");
	})

	dropdown.on("mouseout", function() {
		content.removeClass("show");
	})

	let one = $("#one");
	let two = $("#two");

	let p1 = $(".page1");
	let p2 = $(".page2");

	one.on("click", function() {
		if(!(p2.hasClass("hidden"))) {
			p2.addClass("hidden");
		}

		if(p1.hasClass("hidden")) {
			p1.removeClass("hidden");
		}
	})

	two.on("click", function() {
		if(!(p1.hasClass("hidden"))) {
			p1.addClass("hidden");
		}

		if(p2.hasClass("hidden")) {
			p2.removeClass("hidden");
		}
	})
})

