function bindEventListeners() {
	let menuItems = document.querySelectorAll("section.tabs");
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener("click", function() {
			hideAll();
			const className = menuItems[i].className;
			const section = document.querySelector("section." + className);
			unhide(section);
		})
	}
}

function hideAll() {
	const sections = document.querySelectorAll("section.tabs");
	for (let i = 0; i < sections.length; i++) {
		if(!sections[i].className.match("hidden")) {
			sections[i].className += " hidden"
		}
	}
}

function unhide(element) {
	element.className = element.className.replace(" hidden", "");
}

//Driver Code
bindEventListeners();