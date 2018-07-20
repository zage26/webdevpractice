$(document).ready(function(){
	let s = $(".sign");
	let m = $(".menu");
	s.on("click", function(){
		m.toggleClass("trans");
		if(m.hasClass("trans")) {
			s.html("&times;");
		} else {
			s.html("&#9776;");
		}
	})
})