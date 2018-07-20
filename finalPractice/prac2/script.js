$(document).ready(function() {
	let input = $("#userInput");
	let cont = $("#container")
	input.on("keydown", function(event) {
		if(event.key === "Enter") {
			let post = $("<p>" + input.val() + "<p>");
			cont.append(post);
			input.val("");
			let delBtn = $("<button>Delete</button>");
			cont.append(delBtn);
			delBtn.on("click", function() {
				post.remove();
				delBtn.remove();
			})
		};
	})
})