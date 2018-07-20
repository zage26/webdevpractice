//Connecting to math.js
const math = require("./math.js");
const fs = require("fs");

console.log(math.add(5, -3), math.sub(7, 4));

//Object
const myObj = {
  //Properties
  name: "Will",
  score: 92,
  //When defining a function in an Object
  //Use curly braces and return statement
  //Interpolate by Using ${}
  speak: (name) => { return `Hello ${name}`; },
  nums: [1, 2, 3]
}
//Adding propterties to an object after the fact
myObj.color = "Green";
console.log(myObj.color);
//Use .(name of value) to get a property
//Dot syntax
console.log(myObj.name);
//Bracket syntax
console.log(myObj["name"]);
//String interpolation!!
console.log(myObj.speak("Zage"));
//Overriding Properties
myObj.score = 85;
console.log(myObj.score);

//Turns to a string
// const strObj = JSON.stringify(myObj);
// console.log(typeof strObj);

//Put it back to an Object
// const newObj = JSON.parse(strObj);
// console.log(typeof newObj);

//Write something to a file (over-writes everything)
//2 arguments: file name, data
const strObj = JSON.stringify(myObj);
fs.writeFileSync("output.json", strObj);

//Reads the file
const newObjUnform = fs.readFileSync("./output.json");
const formattedObj = JSON.parse(newObjUnform);
console.log(typeof formattedObj); //--> object
