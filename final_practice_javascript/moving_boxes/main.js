let one = document.querySelector("div.one");
let two = document.querySelector("div.two");
let three = document.querySelector("div.three");
let four = document.querySelector("div.four");

one.addEventListener("click", function() {
  one.classList.toggle("move");
})

two.addEventListener("click", function() {
  two.classList.toggle("widen");
})

"mouseenter mouseleave".split(" ").forEach(function(event) {
  three.addEventListener(event, function() {
    three.classList.toggle("widen");
  })
})

four.addEventListener("click", function() {
  four.classList.toggle("animate");
  setTimeout(function() {
    four.classList.toggle("animate");
  }, 2000);
})
