$(document).ready(function() {
	let paragraphs = $("div");
	let newP = $("<p class='crazy'> I am CRAZY!!</p>");
	let section = $("section:first").parent();
	console.log(paragraphs.parent()) ;
	section.prepend(newP);
	newP.next();
})