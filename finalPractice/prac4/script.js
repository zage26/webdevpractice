$(document).ready(function(){

	let b1 = $(".one");
	b1.on("click", function(){
		b1.toggleClass("t1");
	})

	let b2 = $(".two");
	b2.on("click", function(){
		b2.toggleClass("t2");
	})

	let b3 = $(".three");
	b3.on("mouseover", function(){
		b3.addClass("t3");
	})
	b3.on("mouseout", function(){
		b3.removeClass("t3");
	})

	let b4 = $(".four");
	b4.on("click", function(){
		b4.addClass("t4");
	})
})