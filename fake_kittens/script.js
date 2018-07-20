var images = document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {
	images[i].src = "https://vignette.wikia.nocookie.net/stateofdecay/images/8/84/Cats-animals-kittens-background-us.jpg/revision/latest?cb=20140430201121";
}

var paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++) {
	paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/of/g, "!!!")
}