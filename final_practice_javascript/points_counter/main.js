// Functions
function adjust_points(e, points) {
  let value = parseInt(e.innerHTML) + points;
  if (value < 0) {
    value = 0;
  };
  e.innerHTML = value;
}


// Driver Code
let points = document.getElementById("points");
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener("click", function () {
  adjust_points(points, 1);
});

minus.addEventListener("click", function () {
  adjust_points(points, -1)
})

