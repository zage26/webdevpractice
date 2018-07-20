let openClose = document.getElementById("open-close");
let nav = document.querySelector("nav");
let menuOptions = document.querySelectorAll("nav a");
let pageOne = document.getElementById("one");
let pageTwo = document.getElementById("two");
let paragraphs = document.querySelectorAll(".row p");
let mainContent = document.getElementById("main-content");

openClose.addEventListener("click", function() {
  nav.classList.toggle("open");
  mainContent.classList.toggle("open-content");
  if(nav.classList.contains("open")) {
    openClose.innerHTML = "&times;"
  } else {
    openClose.innerHTML = "&#9776;"
  }
})

pageOne.addEventListener("click", function() {
  paragraphs.forEach(function(paragraph) {
    paragraph.style.display = "block";
    let div = paragraph.parentNode;
    div.style.backgroundColor = "transparent";
    div.style.border = "3px green solid";
  })
})

pageTwo.addEventListener("click", function() {
    paragraphs.forEach(function(paragraph) {
    paragraph.style.display = "none";
    let div = paragraph.parentNode;
    div.style.backgroundColor = "red";
    div.style.border = "none";
  })
})
