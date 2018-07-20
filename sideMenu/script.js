$(document).ready(function(){

	let btn = $('button');
	let menu = $('div.sideMenu');
	let drop = $('div#dropdown');
	let content = $('div.dropctn');
	let i1 = $('a#one');
	let i2 = $('a#two');
	let a1 = $('div#ani1');
	let a2 = $('div#ani2');


	btn.on("click", function(){
		menu.toggleClass("trans1");
	})

	drop.hover(function() {
		content.toggleClass("show");
	})
	
	function icon1() {
		setTimeout(function(){
			a1.html("&#xf244;");
		}, 1000);
		setTimeout(function(){
			a1.html("&#xf243;");
		}, 2000);
		setTimeout(function(){
			a1.html("&#xf241;");
		}, 3000);
		setTimeout(function(){
			a1.html("");
		}, 4000);
	}

	i1.on("click", icon1);

	function icon2() {
		setTimeout(function(){
			a2.html("&#xf2cb;");
		}, 1000);
		setTimeout(function(){
			a2.html("&#xf2ca;");
		}, 2000);
		setTimeout(function(){
			a2.html("&#xf2c9;");
		}, 3000);
		setTimeout(function(){
			a2.html("&#xf2c8;");
		}, 4000);
		setTimeout(function(){
			a2.html("&#xf2c7;");
		}, 5000);
		setTimeout(function(){
			a2.html("");
		}, 6000);
	}

	i2.on("click", icon2);
})