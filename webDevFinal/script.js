$(document).ready(function(){
	
	//Toggle Classes
	let bOne = $(".one");
	let bTwo = $(".two");
	let p1 = $(".page1");
	let p2 = $(".page2");

	bOne.on("click", function(){
		if(!(p2.hasClass("hidden"))) {
			p2.addClass("hidden");
			p1.removeClass("hidden");
		}
	})

	bTwo.on("click", function(){
		if(!(p1.hasClass("hidden"))) {
			p1.addClass("hidden");
			p2.removeClass("hidden");
		}
	})

	//Side Menu
	let s = $(".sign");
	let m = $(".menu");
	s.on("click", function(){
		m.toggleClass("trans");
		if(m.hasClass("trans")) {
			s.html("&times;");
		} else {
			s.html("&#9776");
		}
	})

	//Boxes 
	let one = $(".first");
	let two = $(".second");
	let three = $(".third");

	one.on("click", function() {
		one.toggleClass("t1");
	})

	two.on("click", function() {
		two.toggleClass("t2");
	})

	three.on("click", function() {
		three.toggleClass("t3");
	})

	//Larger Boxes 
	let gOne = $(".gOne");
	let gTwo = $(".gTwo");
	let gThree = $(".gThree");
	let gFour = $(".gFour");
	let gFive = $(".gFive");

	gOne.on("click", function(){
		gOne.toggleClass("change");
	})
	
	gTwo.on("click", function(){
		gTwo.toggleClass("change");
	})

	gThree.on("click", function(){
		gThree.toggleClass("change");
	})

	gFour.on("click", function(){
		gFour.toggleClass("change");
	})

	gFive.on("click", function(){
		gFive.toggleClass("change");
	})

	//Comments 
	let num = $(".number");
	let n = 0;
	let input = $(".myInput");
	let area = $(".post-area");

	input.on("keydown", function(event){
		if(event.key === "Enter") {
			let newPost = $("<p class='new-post'>" + input.val() + "<p>");
			area.prepend(newPost);
			input.val("");
			n++;
			num.html(n);

			newPost.hover(function(){
				newPost.toggleClass("red");
			})

			newPost.on("click", function() {
				newPost.remove();
				n--;
				num.html(n);
			})
		}
	})


})